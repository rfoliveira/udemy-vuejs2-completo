<template>
	<div id="app">
		<h1>Diretivas</h1>
		<!-- Todas as diretivas começam com "v-" -->
		<!-- Como posso passar qualquer tipo de objeto,
		nesse caso, como é texto, usamos aspas simples -->
		<p v-text="'Texto exibido com v-text dentro de uma tag <p>'"></p>
		<!-- Precisa ter cuidado para não sofrer ataque de CSS !!!
		Porque as diretivas processam o conteúdo associado -->
		<p v-html="'Exemplo de html <strong>texto em negrito</string>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada 2</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Com diretiva local</p>
		<p v-destaque-local.atrasar="'orange'">Com diretiva local</p>
		<hr>
		<p v-destaque-local-obj:fundo.atrasar.alternar="{cor1: 'lightgreen', cor2: 'red', atrasar: true, atraso: 2000, intervalo: 2000}">Com diretiva local</p>
		<p v-destaque-local-obj="estiloAviso">Mensagem de aviso que começa a piscar depois de 2s</p>
	</div>
</template>

<script>
export default {
	// definindo diretivas locais
	directives: {
		'destaque-local': {
			bind(el, binding) {
				
				const aplicarCor = (cor) => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor 
					}
					else {
						el.style.color = cor
					}
				}

				let atraso = 0

				if (binding.modifiers['atrasar'])
					atraso = 2000

				const corPadrao = 'purple'
				let corAtual = binding.value

				setTimeout(() => {
					if (binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === binding.value ? corPadrao : binding.value
							aplicarCor(corAtual)
						}, 1000);
					}
					else {
						aplicarCor(binding.value)
					}
				}, atraso);		
			}
		},
		'destaque-local-obj': {
			bind(el, binding) {
				const aplicarCor = (cor) => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor 
					}
					else {
						el.style.color = cor
					}
				}

				let atraso = binding.value.atrasar ? binding.value.atraso : 0
				let intervalo = binding.value.intervalo

				const corPadrao = binding.value.cor2
				let corAtual = binding.cor1

				setTimeout(() => {
					if (binding.value.alternar) {
						setInterval(() => {
							corAtual = corAtual === binding.value.cor1 ? corPadrao : binding.value.cor1
							aplicarCor(corAtual)
						}, intervalo);
					}
					else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso);		
			}
		}
	},
	data() {
		return {
			cor: 'red',
			estiloAviso: {
				cor1: 'green',
				cor2: 'red',
				atrasar: true,
				atraso: 2000,
				alternar: true,
				intervalo: 2000
			}
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
</style>
