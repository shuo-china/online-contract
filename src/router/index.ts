import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'template-create'
    // name: 'Home',
    // component: () => import('../pages/home/index.vue')
  },
  {
    path: '/template-create',
    name: 'TemplateCreate',
    component: () => import('../pages/template/create/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
