<template>
    <div class="usuario-editar">
        <h3>Usuário editar</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <p><strong>Completo: {{ $route.query.completo ? 'Sim' : 'Nâo' }}</strong></p>
        <p><strong>Língua: {{ $route.query.lingua }}</strong></p>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style>

</style>