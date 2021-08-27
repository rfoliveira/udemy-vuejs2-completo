<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<label for="trocaEspacos">Troca espaços por vírgula</label>
		<textarea id="trocaEspacos" v-model="texto1"></textarea>
		<p>{{ texto1 | trocaEspacosPorVirgula }}</p>
		<hr>
		<!-- Posso chamar dessa forma também -->
		<!-- <p>{{ texto1 | troca-espacos-por-virgula }}</p> -->

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<label for="txtConta">Conta o tamanho e mostra</label>
		<textarea id="txtConta" v-model="texto2"></textarea>
		<p>{{ texto2 | contaEMostra }}</p>
		<hr>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ trocaEspacosPorVirgula2 }}</p>
		<p>{{ contaEMostra2 }}</p>
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ trocaEspacosPorVirgula2 }}</p>
		<p>{{ contaEMostra2 }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			texto1: '',
			texto2: ''
		}
	},
	filters: {
		trocaEspacosPorVirgula(valor) {
			return valor.split(' ').join(',')
			//  o instrutor usou 
			// return valor.replace(/ /g, ',')
			// ou 
			// return valor.replace(/\s/g, ',')
		}
	},
	// computed: {
	// 	trocaEspacosPorVirgula2() {
	// 		return this.texto1.replace(/\s/g, ',')
	// 	},
	// 	contaEMostra2() {
	// 		return this.texto2.split(' ').map(t => `${t} (${t.length})`).join(' ')
	// 	}
	// },
	mixins: [{
		computed: {
			trocaEspacosPorVirgula2() {
				return this.texto1.replace(/\s/g, ',')
			},
			contaEMostra2() {
				return this.texto2.split(' ').map(t => `${t} (${t.length})`).join(' ')
			}
		}
	}]
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
