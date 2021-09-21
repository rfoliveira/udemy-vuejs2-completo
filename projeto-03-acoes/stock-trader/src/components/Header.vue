<template>
<!-- No curso o intrutor fez de outra forma
mas a versão dele era outra -->
    <v-card>
        <v-toolbar>
            <v-toolbar-title class="headline text-uppercase mr-4">
                <span>Stock</span>
                <span class="font-weight-light">Trader</span>
            </v-toolbar-title>
            <v-toolbar-items>
                <v-btn text to="/">Início</v-btn>
                <v-btn text to="/portifolio">Portifólio</v-btn>
                <v-btn text to="/stocks">Ações</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn text>Finalizar o dia</v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text v-bind="attrs" v-on="on">Salvar & Carregar</v-btn>
                    </template>
                    <v-list>
                        <v-list-item>Salvar Dados</v-list-item>
                        <v-list-item>Carregar Dados</v-list-item>
                    </v-list>
                    <!-- Dá no mesmo se fizer 
                    <v-list><v-list-item><v-list-item-title>
                        ... 
                    </v-list-item-title></v-list-item></v-list>-->
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
}
</script>

<style>

</style>