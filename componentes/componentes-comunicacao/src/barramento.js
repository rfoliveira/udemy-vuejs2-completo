// Para uso de event buss ao invés de usar Vuex
// Recomendado apenas para pequenas aplicações
import Vue from 'vue';

export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade);
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback);
        }
    }
});