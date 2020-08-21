// import Vue from "vue";
// import Vue from "vue/dist/vue.js";
// import Vue from "../../node_modules/vue/dist/vue.esm.browser";
// import Vue from "../../vue.mjs";
import Vue from '../../web_modules/vue/dist/vue.esm.browser.js'

// import Vuex from 'vuex'
// import Vuex from "../../node_modules/vuex/dist/vuex.esm.browser.js";
import Vuex from '../../web_modules/vuex/dist/vuex.esm.browser.js'

Vue.use(Vuex)

console.log('inside store.js')

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})
