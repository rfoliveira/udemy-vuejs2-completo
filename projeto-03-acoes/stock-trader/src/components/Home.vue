<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e consulte suas ações</h1>
        <!-- class="pa-2", significa "padding all-medida", ou simplesmente "padding-medida" 
        color="primary" == class="primary" -->
        <v-sheet :elevation="6" class="pa-2 primary">
            <!-- class="mr-3" == "margin-right: 3px" 
            as cores estão disponíveis em https://vuetifyjs.com/en/styles/colors/ 
            
            Ref. dos ícones: https://materialdesignicons.com/ -->
            <v-icon class="white--text mr-3">mdi-information</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar e Carregar os Dados</span>
        </v-sheet>
        <!-- mt-3 == margin-top: 3px -->
        <v-sheet :elevation="6" class="pa-2 green darken-1 mt-3">
            <!-- class="mr-3" == "margin-right: 3px" 
            as cores estão disponíveis em https://vuetifyjs.com/en/styles/colors/-->
            <v-icon class="white--text mr-3">mdi-information</v-icon>
            <span class="headline white--text font-weight-light">Clique em 'Finalizar Dia' para iniciar um novo dia!</span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Seu saldo:</strong> {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>