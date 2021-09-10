// aqui possui todas as configurações de rotas
import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

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
        component: Inicio,
        name: 'inicio'
    },
    {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }]
})