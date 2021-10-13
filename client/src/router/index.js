import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Stopwatch from '../views/Stopwatch.vue'
import Rekap from '../views/Rekap.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stopwatch',
    name: 'Stopwatch',
    component: Stopwatch
  },
  {
    path: '/rekap',
    name: 'Rekap',
    component: Rekap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
