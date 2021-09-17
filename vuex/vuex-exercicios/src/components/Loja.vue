<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>Itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Colocar no carrinho</button>
        </div>
    </Painel>
</template>

<script>
// export default {
//     data() {
//         return {
//             sequencia: 1,
//             quantidade: 1,
//             preco: 9.99
//         }
//     },
//     methods: {
//         adicionar() {
//             const produto = {
//                 id: this.sequencia,
//                 nome: `Produto ${this.sequencia}`,
//                 quantidade: this.quantidade,
//                 preco: this.preco
//             }

//             this.sequencia++
//             // console.log(produto)
//             // this.$store.state.produtos.push(produto)

//             // Usando mutations
//             this.$store.commit('adicionarProduto', produto)
//         }
//     }
// }

// Assim como podemos acessar os getters pelo mapGetters,
// podemos fazer o mesmo com as mutations:
// import { mapMutations } from 'vuex'
// e dentro de methods usando o operador spread
// methods: {
//     ...mapMutations(['adicionarProduto']),
//     adicionar() {
//         ...
//         this.adicionarProduto(produto)
//     }
// }

import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            // quantidade: 1,
            // preco: 9.99
        }
    },
    methods: {
        // se for usar namespace, usar
        // ...mapActions('carrinho', ['adicionarProduto']),
        ...mapActions(['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }

            this.sequencia++
            // Com o mapActions estamos simulando 
            // em 1s fazer a inclusão de fato
            this.adicionarProduto(produto)

            // Outra forma com mapActions
            // this.$Store.dispatch('adicionarProduto', produto)

            // Simulando o uso de getters em um único arquivo
            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)
        }
    },
    computed: {
        quantidade() {
            // return this.$store.state.quantidade
            // De forma melhor organizada
            return this.$store.state.parametros.quantidade
        },
        preco() {
            // return this.$store.state.preco
            // De forma melhor organizada
            return this.$store.state.parametros.preco
        }
    }
}

</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>