import Vue from 'vue'
import axios from 'axios'
var about = Vue.component('About', function(resolve, reject) {
  axios
    .get('../templates/About.html')
    .then(response => {
      resolve({
        template: response.data
      })
    })
    .catch(error => {
      console.log('There was an error: ', error.response)
    })
})

export default about
