import type { RouteRecordRaw } from 'vue-router'
import { Routes } from '@/shared'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.INDEX,
    component: () => import('@/pages/main/ui/Main/Main.vue'),
  },
  {
    path: '/news/:id',
    name: Routes.NEWS_VIEW,
    component: () => import('@/pages/main/ui/NewsView/NewsView.vue'),
  },
]
