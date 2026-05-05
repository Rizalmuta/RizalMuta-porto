import { createRouter, createWebHistory } from 'vue-router'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: { template: '<div></div>' },
  },
  {
    path: '/download-cv',
    name: 'download-cv',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
