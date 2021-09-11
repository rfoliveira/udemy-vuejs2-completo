<template>
    <div class="usuario-editar">
        <h3>Usuário editar</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <p><strong>Completo: {{ $route.query.completo ? 'Sim' : 'Nâo' }}</strong></p>
        <p><strong>Língua: {{ $route.query.lingua }}</strong></p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    date() {
        return {
            confirmou: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmou) {
            next()
        }
        else {
            if (confirm('Tem certeza?')) {
                next()
            }
            else {
                next(false)
            }
        }
    }
}
</script>

<style>
#rodape {
    margin-top: 1000px;
}
</style>