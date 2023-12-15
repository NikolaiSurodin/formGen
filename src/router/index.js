import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter )

const routes = [
  {
    path: '/',
    name: 'auth',
    meta: { requiresAuth: false },
    component: () => import( '../views/LoginView.vue' )
  },
  {
    path: '/forms',
    name: 'forms',
    meta: { requiresAuth: true },
    component: () => import( '../views/FormList.vue' )
  },
  {
    path: '/form',
    name: 'form',
    meta: { requiresAuth: true },
    component: () => import( '../views/FormItem.vue' )
  },
  {
    path: '/view-form',
    name: 'viewForm',
    meta: { requiresAuth: true },
    component: () => import( '../views/FormView.vue' )
  }
]

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} )

router.beforeEach( ( to, from, next ) => {
  if( to.matched.some( route => route.meta.requiresAuth ) ) {
    if( isUserLoggedIn() ) {
      next()
    } else {
      next( '/' )
    }
  } else if( to.path === '/' && isUserLoggedIn() ) {
    next( '/forms' )
  } else {
    next()
  }
} )

function isUserLoggedIn() {
  return localStorage.getItem( 'token' ) !== null
}

export default router
