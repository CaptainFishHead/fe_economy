import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/briefIntroduction',
      name: 'briefIntroduction',
      component: () => import('@/views/briefIntroduction/index.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('@/views/timeline/index.vue')
    },
    {
      path: '/trainingWall',
      name: 'trainingWall',
      component: () => import('@/views/trainingWall/index.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/views/platform/index.vue')
    },
  ]
})

export default router
