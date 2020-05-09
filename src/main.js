import Vue from 'vue'

Vue.config.productionTip = false
Vue.component('Saludo', {
  template: '<h1>Hola - Introducción a componentes</h1>'
});
Vue.component('titulo', {
  template: '<h3>Listado de Frameworks Javacripts</h3>'
});
Vue.component('lista-frameworks', {
  template: '<ul><li>Vue.js</li><li>Angular</li><li>React</li></ul>'
});

/* eslint-disable no-new */
new Vue({
  el: '#app'
})
