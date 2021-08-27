import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaEMostra', (valor) => {
	return (valor.length > 0) 
		? valor.split(' ').map(v => `${v} (${v.length})`).join(' ')
		: ''
})

new Vue({
	render: h => h(App),
}).$mount('#app')
