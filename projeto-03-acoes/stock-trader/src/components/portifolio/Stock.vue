<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" 
                    type="number" 
                    v-model.number="quantity"
                    :error="insufficientQuantity"></v-text-field>
                <v-btn class="blue darken-3 white--text" 
                    @click="sellStock" 
                    :disabled="!canSell">Vender</v-btn>
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
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }

            // Passando diretamente para a action
            this.$store.dispatch('sellStock', order)
            this.clearQty()
            /*
            Passando de outra forma:
            import { mapActions } from 'vuex'

            Em methods: {
                // Se deixar ...mapActions(['sellStock']) vai ficar errado 
                // porque é o mesmo nome do método no compomente, gerando loop.
                // Logo, precisa definir um nome diferente para a action
                ...mapActions({ sellStockAction: 'sellStock' }),
                sellStock() {
                    const blablaba...

                    this.sellStockAction(order)

                    blablabla...
                }
            }
            */
        },
        clearQty() {
            this.quantity = 0
        }
    },
    computed: {
        canSell() {
            return this.quantity > 0
                && this.quantity <= this.stock.quantity
                && Number.isInteger(this.quantity)
        },
        insufficientQuantity() {
            return (this.quantity ?? 0) > this.stock.quantity
        }
    }
}
</script>

<style>

</style>