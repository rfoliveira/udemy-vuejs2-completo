<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <!-- para que não tenha duplicação no nome, 
            uso o mesmo como chave.
            Nesse caso poderia, mas não foi usado, o event bus
            para propagar o evento taskDeleted para o pai -->
            <Task v-for="(task, i) in tasks" :key="task.name" :task="task" 
                @taskDeleted="$emit('taskDeleted', i)"
                @taskStateChanged="$emit('taskStateChanged', i)" />
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    components: { Task },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #aaa;
        font-size: 1.7rem;
    }
</style>