<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar mensagem</b-button>

		<!--  Essa div com display none é apenas para
		não poluir a tela de coisa -->
		<div style="display: none">
			<!-- Caso não se use o nome, será usado "v-nome" 
			como padrão -->
			<transition name="fade">	
				<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
			</transition>

			<!-- Colocando o "type", diz que quem vai controlar o tempo
			de exibição do elemento no DOM, será o "animation",
			fazendo que quando a animação terminar, 
			ele irá retirar do DOM.
			Do contrário será a transição (transition). 

			Se colocar "appear", significa que a transição será
			executada quando o componente for criado, ex:
			<transition name="slide" type="animation" appear> -->
			<transition name="slide" type="animation">
				<!-- "v-show" também é suportado, assim como o "v-if",
				porém ele não retira do DOM, apenas dá um "display: none / block"  -->
				<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
			</transition>
			
			<transition 
				enter-active-class="animated bounce"
				leave-active-class="animated shake">
				<!-- "v-show" também é suportado, assim como o "v-if",
				porém ele não retira do DOM, apenas dá um "display: none / block"  -->
				<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
			</transition>

			<hr>
			<b-select v-model="tipoAnimacao" class="mb-4">
				<option value="fade">Fade</option>
				<option value="slide">Slide</option>
			</b-select>

			<!-- A propriedade "mode" define a ordem de execução da transição.
			No caso está definido que apenas após o "out", executará o "in" -->
			<transition :name="tipoAnimacao" mode="out-in">
				<!-- "v-show" também é suportado, assim como o "v-if",
				porém ele não retira do DOM, apenas dá um "display: none / block".
				Para que a transição funcione, precisa colocar chaves únicas "key".
				No caso pode ser qualquer nome, desde que seja único...  -->
				<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
				<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
			</transition>

			<hr>

			<button @click="exibir2 = !exibir2">Alternar</button>
			<!-- Para que nenhum classe css atue na animação desse elemento,
			devemos setar ":css='false'" -->
			<transition 
				:css="false"
				@before-enter="beforeEnter"
				@enter="enter"
				@after-enter="afterEnter"
				@enter-cancelled="enterCancelled"
				@before-leave="beforeLeave"
				@leave="leave"
				@after-leave="afterLeave"
				@leave-cancelled="leaveCancelled">
				<div class="caixa" v-if="exibir2"></div>
			</transition>

			<hr>
			<div class="mb-4">
				<b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>		  
				<b-button variant="primary" @click="componenteSelecionado = 'AlertaAdvertencia'">Warning</b-button>		  
			</div>
			<transition name="fade" mode="out-in">
				<component :is="componenteSelecionado"></component>
			</transition>
			<!-- Obs.: a tag transition não cria elementos em sua execução,
			diferente do transition-group  -->

		</div>

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
		<!-- O transition group agrupa os elementos dentro de uma tag span (padrão).
		Para alterar a tag de agrupamento, basta especificar em "tag" -->
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item>{{aluno}}</b-list-group-item>
				<b-button @click="removerAluno(i)" class="mb-4">Remover aluno</b-button>
			</b-list-group>
		</transition-group>
		
		
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue'
import AlertaInfo from './AlertaInfo.vue'

export default {
	components: { AlertaAdvertencia, AlertaInfo },
	data() {
		return {
			alunos: ['Roberto', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuário',
			exibir: false,
			tipoAnimacao: 'fade',
			exibir2: true,
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno() {
			// Gerando nomes aleatórios
			const alunoAleatorio = Math.random().toString(36).substring(2)
			this.alunos.push(alunoAleatorio)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		animar(el, done, ocultar) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (ocultar ? -rodada : rodada) * 10
				el.style.width = `${novaLargura}px`
				rodada++

				if (rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		}, 
		beforeEnter(el) {
			// window.console.log('beforeEnter', el)
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			// window.console.log('enter', el)
			// // Preciso chamar o método "done()"
			// // para dizer que o evento foi concluído
			// done()
			this.animar(el, done, false)
		},
		afterEnter(el) {
			window.console.log('afterEnter', el)
		},
		enterCancelled(el) {
			window.console.log('enterCancelled', el)
		},
		beforeLeave(el) {
			// window.console.log('beforeLeave', el)
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			// window.console.log('leave', el)
			// done()
			this.animar(el, done, true)
		},
		afterLeave(el) {
			window.console.log('afterLeave', el)
		},
		leaveCancelled(el) {
			window.console.log('leaveCancelled', el)
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

/* Esse valor é padrão, não precisa ser definido */
/* .fade-enter-to, .fade-leave {
	opacity: 1;
}
*/

/* Keyframes, formas de atribuir de maneira mais 
explícita as alterações de css. */
/* Transição subindo */
@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

/* Transição descendo */
@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

/* 
Transition timing functions reference:
https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp
 */
.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

/* Quando está acontecendo a transição de saída */
.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>
