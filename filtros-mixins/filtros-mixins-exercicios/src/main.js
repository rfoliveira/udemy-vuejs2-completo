import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Para registrar um filtro globalmente
// Obs.: filtros não menos performáticos 
// que propriedades computadas
Vue.filter('inverter', function(valor) {
  return valor.split('').reverse().join('')
})

// Este objeto será aplicado a todos os componentes
// Sempre que tiver um método de ciclo de vida associado 
// a um mixon global, ele executará sempre o do mixin 
// quanto do compomentes que tenham este mesmo método de ciclo de vida
// uma vez a cada compomente
Vue.mixin({
  data() {
    return {
      global: 'Estou no mixin global'
    }
  },
  created() {
    window.console.log('Created - mixin global')
  }
})

new Vue({
  render: h => h(App),
  created() {
    window.console.log('Created - Vue instance')
  }
}).$mount('#app')
