// Actions que pertencem a aplicação de forma abrangente (global), 
// e não extritamente a um módulo
import Vue from 'vue'

export default {
    loadData({ commit }) {
        // requisição ajax
        Vue.prototype.$http('data.json').then(res => {
            const data = res.data
            if (data) {
                commit('setStocks', data.stocks)
                commit('setPortifolio', {
                    funds: data.funds,
                    stockPortifolio: data.stockPortifolio
                })
            }
        })
    }
}