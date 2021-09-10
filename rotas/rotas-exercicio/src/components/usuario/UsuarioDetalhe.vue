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
                }}">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style>

</style>