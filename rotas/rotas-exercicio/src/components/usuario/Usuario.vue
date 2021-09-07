<template>
    <div class="usuario">
        <h2>Usuário</h2>
        <hr>
        <p>
            <strong>Código:</strong> {{ id }}
        </p>
        <button sucesso @click="irParaInicio">Voltar ao início</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            this.$router.push('/')
            // pode ser dessa forma também
            // this.$router.push({ path: '/' })
        }
    },
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     // Necessário para detectar as mudanças de parâmetros 
    //     // em componentes iguais
    //     // No curso é usado a assinatura $route(to, from), 
    //     // mas ela fica dando erro devido ao não uso de from 
    //     $route(to) {
    //         this.id = to.params.id
    //     }
    // }
    // Usando propriedades ao invés de parâmetros
    // Nesse caso não precisa de watchers
    props: ['id']
}
</script>

<style>

</style>