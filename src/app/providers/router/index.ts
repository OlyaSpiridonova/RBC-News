import { createRouter, createWebHistory } from 'vue-router'
import { type Middleware, type MiddlewareContext } from './middlewares'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware as Middleware[]

  const context: MiddlewareContext = {
    to,
    from,
    next,
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

const middlewarePipeline = (
  context: MiddlewareContext,
  middleware: Middleware[],
  index: number,
) => {
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) {
    return context.next
  }

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1)
    nextMiddleware({ ...context, next: nextPipeline })
  }
}
