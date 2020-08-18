import Vue from 'vue'
import axios from 'axios'
//import HelloWorld from '@/components/HelloWorld.js'
var home = Vue.component('Home', function(resolve, reject) {
  axios
    .get('../templates/Home.html')
    .then(response => {
      resolve({
        template: response.data
        // ,
        // components: { HelloWorld }
      })
    })
    .catch(error => {
      console.log('There was an error: ', error.response)
    })
})

export default home
