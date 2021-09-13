<template>
  <div id="app">
    <h1>Exercícios Vuex</h1>
    <div class="linha">
      <Parametros />
      <Loja />
    </div>
    <div class="linha">
      <Carrinho />
      <Resumo />
    </div>
  </div>
</template>

<script>
import Parametros from './components/Parametros.vue'
import Loja from './components/Loja.vue'
import Carrinho from './components/Carrinho.vue'
import Resumo from './components/Resumo.vue'

export default {
  components: { Parametros, Loja, Carrinho, Resumo }
}
</script>

<style>
  * {
    font-family: 'Oswald', sans-serif;
  }

  body {
    font-size: 2rem;
    background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFF;
  }

  h1 {
    font-weight: 200;
  }

  .linha {
    display: flex;
  }

  button {
    font-size: 1.8rem;
    padding: 5px 15px;
    border-radius: 5px;
    color: #222;
    background-color: #FAFAFA;
    outline: none;
    border: none;
  }
</style>
