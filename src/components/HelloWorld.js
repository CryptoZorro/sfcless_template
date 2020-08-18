import Vue from 'vue'
var hello_world = Vue.component('HelloWorld', function(resolve, reject) {
  axios
    .get('../templates/HelloWorld.html')
    .then(response => {
      resolve({
        template: response.data,
        props: {
          msg: String
        }
      })
    })
    .catch(error => {
      console.log('There was an error: ', error.response)
    })
})
export default hello_world

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
