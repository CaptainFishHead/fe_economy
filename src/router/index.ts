import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/error/404.vue')
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/briefIntroduction',
      name: 'briefIntroduction',
      meta: {
        title: '简介'
      },
      component: () => import('@/views/briefIntroduction/index.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      meta: {
        title: '时间轴'
      },
      component: () => import('@/views/timeline/index.vue')
    },
    {
      path: '/trainingWall',
      name: 'trainingWall',
      meta: { title: '培训墙' },
      component: () => import('@/views/trainingWall/index.vue'),
    },
    {
      path: '/trainingWall/groupDetails',
      name: 'groupDetails',
      meta: { title: '班级详情' },
      component: () => import('@/views/groupDetails/index.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      meta: { title: '平台' },
      component: () => import('@/views/platform/index.vue')
    },
    {
      path: '/lecturerDetails',
      name: 'lecturerDetails',
      meta: { title: '讲师详情' },
      component: () => import('@/views/lecturerDetails/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      meta: { title: 'demo' },
      component: () => import('@/views/demo/SwiperDemo.vue')
    }
  ]
})

export default router
