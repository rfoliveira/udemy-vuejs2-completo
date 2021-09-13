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
    data() {
        return {
            produtos: [
                { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
                { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
                { nome: 'Produto 3', quantidade: 1, preco: 43.18 },
            ]
        }
    },
    computed: {
        total() {
            return this.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }, 
    methods: {
        finalizar() {
            // 
        }
    }
}
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