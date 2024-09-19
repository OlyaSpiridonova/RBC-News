import '@/app/styles/index.scss'
import { createPinia } from 'pinia'
import { create } from './createApp'
import { router } from './providers/router'

export const app = create()
app.use(createPinia())
app.use(router)

app.mount('#app')
