import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import PlayerDash from '@/views/PlayerDash.vue'
import HireAPro from '@/views/HireAPro.vue'
import Game from '@/views/Game.vue'
import Home from '@/views/Home.vue'
import test from '@/views/test.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Hire-A-Pro',
    name: 'HireAPro',
    component: HireAPro
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
