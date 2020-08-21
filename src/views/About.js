// import axios from 'axios'
import axios from '../../web_modules/axios/dist/axios.js'

import HelloWorld from '../components/HelloWorld.js'

console.log('inside About.js')

// var About = Vue.component("About", function(resolve, reject) {
const About = axios
  // Absolute path doesn't work with PG, but seems to work for vscode live server
  // .get('/templates/About.html')

  // For PG, relative to index.html, not js, this seems to work even for vscode live server
  // .get('./templates/About.html')

  // Relative to js file, seems to work for vscode live server, starting with dot just for PG sake, but PG tried relative only to index.html, and didn't pick this up
  .get('./../../templates/About.html')

  .then(response => {
    return {
      template: response.data,
      components: { HelloWorld }
    }
  })
  .catch(error => {
    console.log('There was an error in About: ', error.response)
  })

export default About
