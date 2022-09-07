import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/Test.vue')
  },
  {
    path: '/sweet-tracker',
    name: 'sweetTracker',
    component: () => import(/* webpackChunkName: "search" */ '@/views/sweet-tracker.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
