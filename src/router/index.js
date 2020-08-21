// import Vue from "vue";
// import Vue from "vue/dist/vue.js";
// import Vue from "../../node_modules/vue/dist/vue.esm.browser";
// import Vue from "../../vue.mjs";
import Vue from '../../web_modules/vue/dist/vue.esm.browser.js'

// import VueRouter from 'vue-router'
// import VueRouter from '../../node_modules/vue-router/dist/vue-router.esm.browser.js'
import VueRouter from '../../web_modules/vue-router/dist/vue-router.esm.browser.js'
//import Home from "../views/Home";

Vue.use(VueRouter)

console.log('inside router.js')

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.js').then(
        c => c.default
      )
    // component: import(/* webpackChunkName: "about" */ "../views/Home.js"),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.js').then(
        c => c.default
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/',
  routes
})

export default router
