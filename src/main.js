import Vue from 'vue'

Vue.config.productionTip = false
// Componentes
var componente1 = Vue.extend({
  template: '<h1>Hola - Introducción a componentes</h1>'
})
var componente2 = Vue.extend({
  template: '<h3>Listado de Frameworks Javacripts</h3>'
})
var componente3 = Vue.extend({
  template: '<ul><li>Vue.js</li><li>Angular</li><li>React</li></ul>'
})
Vue.component('componente-saludo', componente1)
Vue.component('componente-titulo', componente2)
Vue.component('componente-lista', componente3)

/* eslint-disable no-new */
new Vue({
  el: '#app'
})