import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'HomeIndex',
        meta: {
          title: '首页1'
        },
        component: () => import('@/views/home/index')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
