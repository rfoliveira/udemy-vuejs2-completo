import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Directive Hook Arguments
// https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments

// Assim como em componentes é Vue.component(), 
// para diretivas é Vue.directive()
// Vue.directive('destaque', {
// 	// Como só estou usando o "el", o vue vai dar erro
// 	// dizendo que os demais parâmetros não estão sendo usados
// 	// bind(el, binding, vnode) {
// 	// 	el.style.backgrounColor = 'lightgreen'
// 	// }
// 	bind(el) {
// 		el.style.backgroundColor = 'lightgreen'
// 	}
// })

// Assim também funciona
// Vue.directive('destaque', {
// 	bind: function(el) {
// 		el.style.backgroundColor = 'lightgreen'
// 	}
// })

// Considerando o segundo parâmetro: binding
// Aqui o registro é global
Vue.directive('destaque', {
	bind(el, binding) {

		let atraso = 0

		if (binding.modifiers['atrasar'])
			atraso = 2000;

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value 
			}
			else {
				el.style.color = binding.value
			}	
		}, atraso);		
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
