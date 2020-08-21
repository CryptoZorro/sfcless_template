// import axios from 'axios'
import axios from '../../web_modules/axios/dist/axios.js'

//var Home = Vue.component("Home", function(resolve, reject) {

console.log('inside Home.js')

const Home = axios
  // Absolute path doesn't work with PG, but seems to work for vscode live server
  // .get('/templates/Home.html')

  // For PG, relative to index.html, not js, this seems to work even for vscode live server
  // .get('./templates/Home.html')

  // Relative to js file, seems to work for vscode live server, starting with dot just for PG sake, but PG tried relative only to index.html, and didn't pick this up
  .get('./../../templates/Home.html')

  .then(response => {
    return {
      template: response.data
      // ,
      // components: { HelloWorld }
    }
  })
  .catch(error => {
    console.log('There was an error in Home: ', error.response)
  })

export default Home
