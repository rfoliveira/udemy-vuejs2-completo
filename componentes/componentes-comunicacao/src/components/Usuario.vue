<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <!-- <app-usuario-info nome="Rafael" /> -->
            <!-- outra forma -->
            <!-- propriedades são case-sensitive -->
            <!-- No componente filho está sendo usando como string, logo
            se passar :nome="1", será entendido como se tivesse passando um bool,
            gerando erro no filho que espera uma string -->
            <!-- <app-usuario-info :nome="nome" /> -->
            <!-- Para uso do default... -->
            <!-- <app-usuario-info /> -->
            <!-- Para escutar uma notificação dos filhos.
            Obs.: o evento pode ser um objeto -->
            <app-usuario-info 
                :nome="nome" 
                :idade="idade"
                @nomeMudou="nome = $event" 
                :reiniciarFn="reiniciarNome" />

            <!-- 
                Atualizando os filhos com a idade informada
                no filho. O valor de idade aqui é replicado para
                todos os demais filhos, inclusive àquele que emitiu
                o evento.
             -->
            <!-- <app-usuario-editar 
                :idade="idade"
                @idadeMudou="idade = $event + 1" /> -->
            
            <!-- 
                Demonstrando o uso do event bus, sem passar
                pelo componente PAI. 
                Nesse caso não altera o componente pai, apenas o irmão
                porque o pai ainda está considerando de um evento de callback e não
                do barramento
             -->
            <app-usuario-editar 
                :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
         return {
             nome: 'Pedro',
             idade: 21
         }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana';
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
