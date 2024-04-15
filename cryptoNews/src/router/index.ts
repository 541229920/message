import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Subscription from '@/views/Subscription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path:'/sub',
      name:'sub',
      component:Subscription
    }
  ]
})

export default router
