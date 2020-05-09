import Vue from 'vue'

Vue.config.productionTip = false
// Componentes
var componente2 = Vue.extend({
  template: '<h3>Listado de Frameworks Javacripts</h3>'
})
var componente3 = Vue.extend({
  template: '<ul><li>Vue.js</li><li>Angular</li><li>React</li></ul>'
})
Vue.component('componente-saludo', {
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