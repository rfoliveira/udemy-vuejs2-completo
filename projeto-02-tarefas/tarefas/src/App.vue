<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid :tasks="tasks" 
			@taskDeleted="deleteTask"
			@taskStateChanged="toggleTaskState" />
	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue';
import NewTask from './components/NewTask.vue';
import TasksProgress from './components/TasksProgress.vue';

export default {
	components: { TaskGrid, NewTask, TasksProgress },
	data() {
		return {
			tasks: [
				// { name: "Lavar a louça", pending: false },
				// { name: "Comprar blusa", pending: true }
			]
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name;
			// para validar a inclusão do elemento no array
			// e não ter problemas de duplicação no tratamento
			// da chave do v-for de TaskGrid
			const reallyNew = this.tasks.filter(sameName).length == 0;

			if (reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				});
			}
			// Outra forma de escrever o mesmo de cima...
			// reallyNew && this.tasks.push({
			// 	name: task.name,
			// 	pending: task.pending || true
			// });
		},
		deleteTask(idxTask) {
			this.tasks.splice(idxTask, 1);
		},
		toggleTaskState(idxTask) {
			this.tasks[idxTask].pending = !this.tasks[idxTask].pending;
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length;
			const done = this.tasks.filter(t => !t.pending).length;

			// Caso dê um valor inválido, retornará zero
			return Math.round(done / total * 100) || 0;
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
		// Dessa forma não atualiza a listagem em caso de mudança de estado de 
		// tasks() {
			// pending > done
			// localStorage.setItem('tasks', JSON.stringify(this.tasks));
		// }
	},
	created() {
		const json = localStorage.getItem('tasks');
		const array = JSON.parse(json);

		this.tasks = Array.isArray(array) ? array : [];
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
