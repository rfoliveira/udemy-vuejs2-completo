import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            // lógica para variar os preços aleatoriamente
            state.stocks.forEach(stock => {
                // Dando uma leve tendência ao aumento das ações
                // arredondando para inteiro
                stock.price =  Math.round(stock.price * (1 + Math.random() - 0.45))
            })
        }
    },
    actions: {
        buyStock({ commit }, order) {
            // console.log('modules/stocks.js - action')
            // chamando a mutation...
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            // console.log('Chamado do método de "created()" no App.vue')
            // chamando a mutation...
            commit('setStocks', stocks)
        },
        randomizeStocks({ commit }) {
            // chamando a mutation...
            commit('randomizeStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}