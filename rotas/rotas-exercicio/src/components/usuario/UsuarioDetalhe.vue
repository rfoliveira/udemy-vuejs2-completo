<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhes</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">
            Editar
        </router-link> -->
        <!-- Outra forma que funciona
        <router-link tag="button" primario :to="`/usuario/${$route.params.id}/editar`">
            Editar
        </router-link>
         -->
         <!-- Com rotas nomeadas -->
         <!-- <router-link tag="button" primario 
            :to="{ 
                name: 'editarUsuario', 
                params: { id }
            }">
            Editar
        </router-link> -->

        <!-- Usando parâmetros de query na url -->
        <router-link tag="button" primario 
            :to="{ 
                name: 'editarUsuario', 
                params: { id },
                query: {
                    completo: true,
                    lingua: 'pt'
                },
                hash: '#rodape'
            }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // Outra forma de atribuir uma ação ao acessar a rota.
    // Nesse ponto não consigo acessar propriedade nenhuma do componente (com "this"),
    // porque o mesmo ainda não foi criado.
    // Para conseguir acessar, preciso colocar dentro de uma função callback em next
    beforeRouteEnter(to, from, next) {
        // Faz alguma coisa
        next()

        // Acessando as propriedades do compomente
        // Nesse caso, o componente já foi criado (não é usual)
        // next(vm => {
        //     // Nesse caso, vai imprimir a propriedade "id"
        //     // no console
        //     console.log(vm.id)
        // })
    }
}
</script>

<style>

</style>