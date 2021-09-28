import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'
import './plugins/axios'

Vue.config.productionTip = false

// Como nessa aplicação será usado apenas um 
// punico filtro, então não tem necessidade 
// de criar uma estrutura de pastas para organizar o mesmo, 
// o que é recomendado quando se tem muitos filtros
Vue.filter('currency', value => {
  return 'R$ ' + value.toLocaleString('pt-BR')
}) 

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')