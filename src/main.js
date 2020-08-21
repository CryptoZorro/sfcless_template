// import Vue from "vue";
// import Vue from "vue/dist/vue.js";
// import Vue from "../../node_modules/vue/dist/vue.esm.browser";
// import Vue from "../../vue.mjs";
import Vue from '../web_modules/vue/dist/vue.esm.browser.js'

console.log('inside main.js')
// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue 2.6.0-beta1 ESM Browser Build!'
//   }
// })

// import App from "./App.vue";
import App from './App.js'
import router from './router/index.js'
// import router from "./router/index.js";
import store from './store/index.js'
// import store from "./store/index.js";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept()
//   import.meta.hot.dispose(() => {
//     app.unmount()
//   })
// }

// index.js

// import { createApp } from 'vue'
// import App from './App.vue'

// const app = createApp(App)
// app.mount('#app')

// // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// // Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept()
//   import.meta.hot.dispose(() => {
//     app.unmount()
//   })
// }
