import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Galleries from './views/Galleries.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Images',
      name: 'Images',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Images.vue')
    },
    {
      path: '/Galleries',
      name: 'Galleries',
      component: () => import(/* webpackChunkName: "about" */ './views/Galleries.vue')
    },

  ]
})
