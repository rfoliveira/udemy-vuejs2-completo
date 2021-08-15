<template>
	<div id="app">
		<!-- Para ficar alternando o que será exibido.
		Demonstração da exibição dinâmica do componente -->
		<span>
			<button @click="atribuiComponente('Citacoes')">Citações</button>
			<button @click="atribuiComponente('Sobre')">Sobre</button>
		</span>
		<!--  comentado para demonstrar o 
		uso de componentes dinamicos -->
		<!-- <Citacoes />
		<Sobre /> -->

		<!--  uso de componente dinamico
		nesse caso só está exibindo o componente Citacoes 
		outra forma = <componente :is="'Citacoes'" />-->
		<component :is="componente" />	
		<!-- Obs: o professor do curso não usa
		um método para funcionar. No dele
		apenas atribuindo <button @click="componente = 'Citacoes'">...</button>
		funciona -->
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			componente: 'Citacoes'
		}
	},
	methods: {
		atribuiComponente(comp) {
			this.componente = comp;
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>