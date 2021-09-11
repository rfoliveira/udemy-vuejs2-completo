// aqui possui todas as configurações de rotas
import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
// Comentado pois está sendo usado carregamento lazy
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')

// Registrando o componente
Vue.use(Router)

// Existem d2 tipos de rotas:
// Por hash e post history
// Hash -> http://localhost:8080/#/usuario (o valor do hash ñao vai para o servidor, fica no browser)
// O hash serve para ir exatamente para determinado ponto da página (semelhante aos links da wikipedia).
// Na verdade hash é o link com "#", navegando para "#idElemento".
// history -> http://localhost:8080/usuario
// Ref.: https://router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
// Em produção, precisa configurar o servidor do contrário não vai funcionar
const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // Forçando para ir para a posição 1000 do eeixo y
        // equivalente a margin-top: 1000px
        // return { x: 0, y: 1000 }

        // Outra forma, de maneira mais dinâmica,
        // usando os parâmetros "to", "from" e "savedPosition"
        // Caso tenha posição salva
        if (savedPosition) {
            return savedPosition
        }
        else if (to.hash) {
            return { selector: to.hash }
        }
        else {
            // Retorno à posição normal, sem aplicar nada
            return { x: 0, y: 0 }
        }
    },
    routes: [
    {
        path: '/',
        // component: Inicio,
        name: 'inicio',
        components: {
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: usuarioDetalheBeforeEnter },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }, {
        // usando redirect...
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        // Nesse caso, irá redirecionar qualquer página
        // que não esteja mapeado para "inicio". 
        // Obs.: o que é passado como query params também,
        // mantendo esses parâmetros na url definida no redirect
        path: '*',
        redirect: '/'
    }]
})

// Interceptando a navegação entre as rotas de forma global
router.beforeEach((to, from, next) => {
    next()
    // Se quiser, posso definir uma rota para 
    // ir diretamente com next('/usuario')
    // Verificando se a rota é tal e redirecionando
    // if (to.path === '/algumaRotaRegistrada')
    //    next('/algumaRota')
    // else
    //    next()

    // Para abortar a navegação, passar false no next
    // next(false)
})

// Posso atribuir diretamente a uma determinada rota também
// Por exemplo, essa daqui será para a rota de usuarioDetalhe
// Obs.: o nome do método pode ser qualquer um, aqui só usei um
// no meu "padrão". Não funciona se definir uma função com "const" ou "let"
function usuarioDetalheBeforeEnter(to, from, next) {
    // Faz alguma coisa...
    console.log('usuarioDetalhe beforeEnter')
    next()
}

// Carregamento de rotas de forma tardia
// -------------------------------------
// Quando a aplicação é muito grande, é interessante usar pois faz com que 
// os componentes das rotas mapeadas (e seus filhos), sejam carregados apenas 
// ao acessar essa rota, sendo esse cache mantido no browser. Dessa forma, no próximo 
// acesso não haverá recarregamento do componente.
// Essa configuração irá executar requisições "prefetch", que é uma requisição de validação apenas
// não possuindo dados. O componente será carregado no primeiro acesso e depois não mais.

// Para isso basta definir dessa forma:
// ------------------------------------
// const Usuario = () => import('./components/usuario/Usuario')
// const UsuarioLista = () => import('./components/usuario/UsuarioLista')
// const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
// const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

// Para agrupar o carregamento (geração de bundles), pois não é performático
// carregar componente um a um em uma aplicação grande.
// O código abaixo criará um único arquivo chamado usuario.js com todos os
// componentes no primeiro acesso ao usuário.
// -------------------------------------------------------------------------
// const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
// const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
// const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
// const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')


export default router