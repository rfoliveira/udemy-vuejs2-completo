<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    props: ['idade'],
    methods: {
        alterarIdade() {
            this.idade = 33;
            // this.$emit('idadeMudou', this.idade);

            // É usado a instÂncia do barramento para fazer a emissão do evento
            // barramento.$emit('idadeMudou', this.idade);
            barramento.alterarIdade(this.idade);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
