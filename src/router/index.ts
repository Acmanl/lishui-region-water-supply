import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
