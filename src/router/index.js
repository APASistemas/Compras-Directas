import Vue from 'vue'
import VueRouter from 'vue-router'
import Informes from '../views/Informes.vue'
// import Loginpage from '../views/Loginpage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Loginpage.vue')
    component: () => import(/* webpackChunkName: "about" */ '../views/Loginnew.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/edit-user/:id',
    name: 'usereditaaaaa',
    component: () => import(/* webpackChunkName: "about" */ '../components/Edituser.vue')
  },
  {
    path: '/user-add',
    name: 'useradd',
    component: () => import(/* webpackChunkName: "about" */ '../components/Adduser')

  },
  {
    path: '/providers',
    name: 'providers',
    component: () => import(/* webpackChunkName: "about" */ '../components/Grdproveedores')

  },
  {
    path: '/gerency-add',
    name: 'gerencyadd',
    component: () => import(/* webpackChunkName: "about" */ '../components/Addgerency')

  },
  {
    path: '/informes',
    name: 'informes',
    component: Informes
  },
 
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../components/Grdusuarios.vue')
  },
  {
    path: '/gerency',
    name: 'grdgerencias',
    component: () => import(/* webpackChunkName: "about" */ '../components/Grdgerencias.vue')
  },
  {
    path: '/purchase',
    name: 'grdcompras',
    component: () => import(/* webpackChunkName: "about" */ '../components/Grdcompras.vue')
  },
  
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
