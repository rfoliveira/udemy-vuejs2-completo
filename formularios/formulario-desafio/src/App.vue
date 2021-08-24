<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!submetido">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- <Rotulo nome="Nome">
					<input type="text" v-model="nome">					
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<input type="text" v-model="sobrenome">
				</Rotulo> -->

				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<NomeCompleto :value="nomeCompleto" />
				<!-- Dessa forma também funciona... -->
				<!-- <NomeCompleto v-model="nomeCompleto" /> -->

				<!-- Email -->
				<Rotulo nome="E-mail">
					<input type="text" v-model="email">
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Senha">
					<input type="password" v-model="senha">
				</Rotulo>				
				<!-- Armazenar Dados? (Sim/Não) -->				
				<Rotulo nome="Armazenar Dados">
					<input type="checkbox" v-model="armazenarDados">
				</Rotulo>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome">
					<span>{{nomeCompleto.nome}}</span>
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<span>{{nomeCompleto.sobrenome}}</span>
				</Rotulo>
				<Rotulo nome="Email">
					<span>{{email}}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{senha}}</span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span v-if="armazenarDados">SIM</span>
					<span v-else>NÂO</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue';
import NomeCompleto from './components/NomeCompleto.vue';

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			// nome: '',
			// sobrenome: '',
			email: '',
			senha: '',
			armazenarDados: false,
			submetido: false,
			nomeCompleto: {
				nome: '',
				sobrenome: ''
			}
		}
	},
	methods: {
		enviar() {
			this.submetido = true;
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
