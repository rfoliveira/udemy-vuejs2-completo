<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button @click="finalizar">Finalizar</button>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        total() {
            return this.$store.getters.valorTotal
        } 
    },     
    methods: {
        finalizar() {
            // 
        }
    }
}

// Outra forma:
// Nesse caso precisa mudar o uso para 
// <span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span>
// ou, caso queira manter o nome da propriedade "total"
// import { mapGetters } from 'vuex'

// export default {
//     computed: mapGetters(['valorTotal']),     
//     // mapeando para uma variável de mesmo nome
//     // computed: mapGetters({
//     //     total: 'valorTotal'
//     // }),
//     methods: {
//         finalizar() {
//             // 
//         }
//     }
// }

// Se for usar namespace
// export default {
//     computed: mapGetters('carrinho', {
//         total: 'valorTotal'
//     })
// }
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #eee;
        width: 33%;
    }
</style>