// import Vue from "vue";
// import Vue from "vue/dist/vue.js";
// import Vue from "../../node_modules/vue/dist/vue.esm.browser";
// import Vue from "../../vue.mjs";
import Vue from '../web_modules/vue/dist/vue.esm.browser.js'

console.log('inside App.js')

// import axios from 'axios'
import axios from '../web_modules/axios/dist/axios.js'

var App = Vue.component('App', function(resolve, reject) {
  axios
    // Absolute path doesn't work with PG, but seems to work for vscode live server
    // .get('/templates/App.html')

    // For PG, relative to index.html, not js, also seems to work even for vscode live server
    // .get('./templates/App.html')

    // Relative to js file, seems to work for vscode live server, starting with dot just for PG sake, but PG tried relative only to index.html, and didn't pick this up
    .get('./../templates/App.html')

    .then(response => {
      resolve({
        template: response.data
      })
    })
    .catch(error => {
      console.log('There was an error in App: ', error.response)
    })
})

export default App
