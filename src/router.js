import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/Home.vue'
import core from './views/core/Core.vue'
import about from './views/about/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '*', redirect: '/home'},
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/core',
      name: 'core',
      component: core
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
