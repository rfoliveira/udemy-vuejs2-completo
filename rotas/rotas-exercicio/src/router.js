// aqui possui todas as configurações de rotas
import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'

// Registrando o componente
Vue.use(Router)

// Existem d2 tipos de rotas:
// Por hash e post history
// Hash -> http://localhost:8080/#/usuario (o valor do hash ñao vai para o servidor, fica no browser)
// history -> http://localhost:8080/usuario
// Ref.: https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
// Em produção, precisa configurar o servidor do contrário não vai funcionar
export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/usuario/:id',
        component: Usuario,
        props: true
    }]
})