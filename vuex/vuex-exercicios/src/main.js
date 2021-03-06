import Vue from 'vue'
import App from './App.vue'
// import store from './store/store'
import store from './store/storeOrganizada'

Vue.config.productionTip = false

// Componente global
import Painel from './components/Painel'
Vue.component('Painel', Painel)

// Filtro global
Vue.filter('dinheiro', valor => {
  return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
