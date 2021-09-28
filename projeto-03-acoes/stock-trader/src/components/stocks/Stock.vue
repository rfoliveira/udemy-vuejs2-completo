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
    <!-- Eu -->
    <!-- <v-flex class="pa-3">
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

        
    </v-flex> -->

    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" 
                    type="number" 
                    v-model.number="quantity"
                    :error="insufficientFunds"></v-text-field>
                <v-btn class="green darken-3 white--text" 
                    @click="buyStock" 
                    :disabled="!canBuy">{{ !insufficientFunds  ? 'Comprar' : 'Insuficiente'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
    
    
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity 
            }

            // console.log(order)
            // Chama a action definida em store/modules/stock.js
            this.$store.dispatch('buyStock', order)
            this.clearQty()
        },
        clearQty() {
            this.quantity = 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds
        },
        canBuy() {
            return !this.insufficientFunds 
                && this.quantity > 0
                && Number.isInteger(this.quantity)
        }
    }
}
</script>

<style>

</style>