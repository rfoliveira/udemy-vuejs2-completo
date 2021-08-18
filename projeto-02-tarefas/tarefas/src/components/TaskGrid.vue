<template>
    <div class="task-grid">
        <template>
            <!-- para que não tenha duplicação no nome, 
            uso o mesmo como chave -->
            <Task v-for="task in tasks" :key="task.name" :task="task" />
        </template>
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

</style>