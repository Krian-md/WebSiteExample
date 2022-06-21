import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '@/views/Todo.vue'
import appStates from '@/enums/appStates';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: appStates.TODO,
    component: Todo 
  },
  {
    path: '/about',
    name: appStates.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/catalog',
    name: appStates.CATALOG,
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/Catalog.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
