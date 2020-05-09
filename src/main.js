import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false
// // Componentes
// var componente2 = Vue.extend({
//   template: '<h3>{{subtitulo}}</h3>',
//   data () {
//     return {
//       subtitulo: 'Listado de Frameworks Javacripts'
//     }
//   }
// })
// var componente3 = Vue.extend({
//   template: '<div><ul><framework v-for="ele in lista" :key="ele.id">{{ele.item}}</framework></ul></div>',
//   // Se debe crear un método que devuelva los datos
//   data () {
//     return {
//       lista: [
//         { id: 1, item: 'Vue.js' },
//         { id: 2, item: 'Angular' },
//         { id: 3, item: 'React' },
//         { id: 4, item: 'Backbone' }
//       ]
//     }
//   }
// })
// Vue.component('componente-saludo', {
//   data () {
//     return {
//       titulo: 'Hola - Introducción a componentes'
//     }
//   },
//   methods: {
//     display () {
//       console.log('componente en linea')
//     }
//   }
// })
// Vue.component('componente-titulo', componente2)
// Vue.component('componente-lista', componente3)
// Vue.component('framework', {
//   template: '<li><slot></slot></li>'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
