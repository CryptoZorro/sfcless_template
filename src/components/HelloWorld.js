// import Vue from "vue";
// import Vue from "vue/dist/vue.js";
// import Vue from "../../node_modules/vue/dist/vue.esm.browser";
// import Vue from "../../vue.mjs";
import Vue from '../../web_modules/vue/dist/vue.esm.browser.js'

// import axios from 'axios'
import axios from '../../web_modules/axios/dist/axios.js'

var HelloWorld = Vue.component('HelloWorld', function(resolve, reject) {
  axios
    // Absolute path doesn't work with PG, but seems to work for vscode live server
    // .get('/templates/HelloWorld.html')

    // For PG, relative to index.html, not js, this seems to work even for vscode live server
    // .get('./templates/HelloWorld.html')

    // Relative to js file, seems to work for vscode live server, starting with dot just for PG sake, but PG tried relative only to index.html, and didn't pick this up
    .get('./../../templates/HelloWorld.html')

    .then(response => {
      resolve({
        template: response.data,
        props: {
          msg: String
        }
      })
    })
    .catch(error => {
      console.log('There was an error in HelloWorld: ', error.response)
    })
})

export default HelloWorld

// <!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped>
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
