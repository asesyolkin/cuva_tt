import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../components/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/hotels-details',
    name: 'HotelsDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/HotelDetails.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
