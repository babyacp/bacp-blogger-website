import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-blog',
    name: 'Add',
    component: () => import(/* webpackChunkName: "create" */ '../views/CreateBlog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import(/* webpackChunkName: "blogs" */ '../views/Blogs.vue')
  },
  {
    path: '/detail-blog',
    name: 'DetailBlog',
    component: () => import(/* webpackChunkName: "detailblog" */ '../views/DetailBlog.vue')
  },
  {
    path: '/edit-blog',
    name: 'EditBlog',
    component: () => import(/* webpackChunkName: "editblog" */ '../views/EditBlog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
