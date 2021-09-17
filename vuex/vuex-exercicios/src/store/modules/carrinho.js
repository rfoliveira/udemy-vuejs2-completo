// Organizando melhor a aplicação em módulos
// Neste caso usará o state apenas do módulo referenciado
// Para acessar o state global (não recomendado),
// usar rootState
// Para usar como namespace, colocar namespaced: true
// e ao usar chamar informando o namespace, do contrário não vai funcionar
// Ex. no componente Loja, usar
// methods: {
//     ...mapActions('carrinho', ['adicionarProduto'])
// }

// import { mapGetters } from "vuex"

// Em Resumo
// computed: mapGetters('carrinho', {
//     total: 'valorTotal'
// })

export default {
    // namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, produto) {
            state.produtos.push(produto)
        }
    },
    // actions: {
    //     adicionarProduto(context, payload) {
    //         setTimeout(() => {
    //             context.commit('adicionarProduto', payload)
    //         }, 1000)
    //     }
    // }
    // outra forma dessa action acima
    actions: {
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}