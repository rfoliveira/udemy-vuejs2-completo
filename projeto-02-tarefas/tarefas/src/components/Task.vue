<template>
  <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
      <!-- Como o click do "x" está dentro de um elemento
      com click também defindo, para que o click não se propague 
      (evitando assim que se manipule o array sem ter mais o índice, no caso),
      devemos colocar @click.stop="...", que equivalente ao event.stopPropagation() -->
      <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
      <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        // para definir qual estilo que será aplicado 
        // ao clicar no componente
        stateClass() {
            return {
                pending: this.task.pending, // vermelho
                done: !this.task.pending    // verde
            }
        }
    }
}
</script>

<style scoped>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none; /* para o usuário não conseguir selecionar o texto */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid #b73229;
        background-color: #f44336;
    }

    .done {
        color: #ddd;
        border-left: 12px solid #0a8f08;
        background-color: #4caf50;
        text-decoration: line-through;
    }

    .pending .close {
        background-color: #b73229;
    }

    .done .close {
        background-color: #0a8f08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>