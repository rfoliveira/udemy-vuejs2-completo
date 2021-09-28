import Vue from 'vue'
import axios from 'axios'

// Configuração do axios de forma global
// Firebase realtime database criado em 27/09/2021,
// com expiração de acesso livre em 27/10/2021
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trader-683ab-default-rtdb.firebaseio.com/'
        })
    }
})