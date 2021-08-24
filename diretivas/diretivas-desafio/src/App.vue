<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-quando:click="acaoClick">Executar</button>
		<p v-quando:mouseenter="acaoMouseEnter" v-quando:mouseleave="acaoMouseLeave">Teste mouse event</p>
	</div>
</template>

<script>
export default {
	directives: {
		'quando': {
			bind(el, binding) {

				let evento = 'on' + binding.arg
				el[evento] = binding.value

				// outra forma
				// const tipo = binding.arg
				// const fn = binding.value
				// el.addEventListener(tipo, fn)
			}
		}
	},
	methods: {
		acaoClick() {
			window.console.log('Mètodo click executado')
		},
		acaoMouseEnter() {
			window.console.log('Mètodo mouse enter executado')
		},
		acaoMouseLeave() {
			window.console.log('Mètodo mouse leave executado')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
