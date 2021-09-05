import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-3d782-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        // É definido um atributo de forma global
        // referenciando o axios
        Vue.prototype.$http = axios
    }
})