export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        // ou buyStock(state, { stockId, stockPrice, quantity })
        buyStock(state, order) {
            console.log('modules/portifolio.js - mutation:buyStock')
            const record = state.stocks.find(s => s.id == order.stockId)

            if (record) {
                record.quantity += order.quantity
            }
            else {
                // No caso, o preço não é relevante
                state.stocks.push({
                    id: order.stockId,
                    quantity: order.quantity
                })
            }

            state.funds -= order.stockPrice * order.quantity
        },
        // Aqui uso a forma decomposta do objeto
        sellStock(state, { stockId, quantity, stockPrice }) {
            console.log('modules/portifolio.js - mutation:sellStock')
            const record = state.stocks.find(s => s.id === stockId)

            if (record.quantity > quantity) {
                record.quantity -= quantity
            }
            else {
                const idx = state.stocks.indexOf(record)
                state.stocks.splice(idx, 1)
            }

            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({ commit }, order) {
            console.log('modules/portifolio.js - action:sellStock', order)
            commit('sellStock', order)
        }
    },
    getters: {
        // Retorna todas as ações do meu portifólio
        // O segundo parâmetro equivale a 
        // todos os getters da aplicação
        stockPortifolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(s => s.id === stock.id)

                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        // Retorna quanto tenho de saldo
        funds(state) {
            return state.funds
        }
    }
}