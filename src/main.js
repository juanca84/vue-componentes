import Vue from 'vue'

Vue.config.productionTip = false
// Componentes
var componente2 = Vue.extend({
  template: '<h3>{{subtitulo}}</h3>',
  data () {
    return {
      subtitulo: 'Listado de Frameworks Javacripts'
    }
  }
})
var componente3 = Vue.extend({
  template: '<ul><li v-for="ele in lista">{{ele.item}}</li></ul>',
  // Se debe crear un método que devuelva los datos
  data () {
    return {
      lista: [
        { item: 'Vue.js' },
        { item: 'Angular' },
        { item: 'React' },
        { item: 'Backbone' }
      ]
    }
  }
})
Vue.component('componente-saludo', {
  data () {
    return {
      titulo: 'Hola - Introducción a componentes'
    }
  },
  methods: {
    display () {
      console.log('componente en linea')
    }
  }
})
Vue.component('componente-titulo', componente2)
Vue.component('componente-lista', componente3)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
