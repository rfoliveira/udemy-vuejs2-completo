import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // tudo que é colocado aqui é gerenciado de forma
        // centralizada. No caso a lista de produtos.
        produtos: [
            // { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
            // { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
            // { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 }
        ],
        quantidade: 0,
        preco: 0
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        // Sintaxe method(state, payload) { ... }
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        },
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },
    actions: {
        // Aqui é recomendado se colocar regras de negócio
        // por isso foi definido um timeout, simulando 
        // algum processamento
        adicionarProduto(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
        // Outra forma, extraindo a propriedade commit deiretamente
        // adicionarProduto({ commit }, payload) {
        //     setTimeout(() => {
        //         commit('adicionarProduto', payload)
        //     }, 1000)
        // }
    }
})