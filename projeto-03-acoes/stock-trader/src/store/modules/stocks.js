import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            console.log('modules/stocks.js - action')
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            // console.log('Chamado do método de "created()" no App.vue')
            commit('setStocks', stocks)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}