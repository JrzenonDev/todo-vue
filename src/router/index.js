import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Kanban from '@/views/Kanban/Kanban.vue'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'kanban',
    path: '/kanban',
    component: Kanban
  }
]

const router = new Router({ routes })

export default router
