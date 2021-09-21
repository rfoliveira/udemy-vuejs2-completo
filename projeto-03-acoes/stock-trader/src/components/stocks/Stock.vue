<template>
    <!-- Forma do instrutor que não fica direito -->
    <!-- <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>NOME <small>(Preço: PREÇO)</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"></v-text-field>
                <v-btn class="green darken-3 white--text">Comprar</v-btn>
            </v-container>
        </v-card>
    </v-flex> -->
    <v-flex class="pa-3">
        <v-card class="d-flex green darken-3 white--text text-h5" outlined tile>
            <v-card-title>
                <strong>NOME <small>(Preço: PREÇO)</small></strong>
            </v-card-title>
        </v-card>

        <v-card>
            <v-container>
                <v-text-field label="Quantidade" type="number"></v-text-field>
                <v-btn class="green darken-3 white--text">Comprar</v-btn>
            </v-container>
        </v-card>

        
    </v-flex>
    
    
</template>

<script>
export default {
    
}
</script>

<style>

</style>