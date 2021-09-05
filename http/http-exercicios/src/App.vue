<template>
  <div id="app" class="container">
    <h1>HTTP com axios</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.post('usuarios.json', {
      nome: 'Naria',
      email: 'maria_silva@teste.com'
    }).then(res => console.log(res))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
