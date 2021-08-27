<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{usuarioLogado}}</p>
    <p>{{cpf | cpf | inverter}}</p>
    <!-- Também poderia ser assim -->
    <!-- <p>{{ '11122233388' | cpf | inverter}}</p> -->

    <input type="text" :value="cpf | cpf | inverter">
    <hr>
    <Frutas />
    <hr>
    <!-- Forçando uma duplicação do componente Frutas -->
    <div>
      <ul>
          <li v-for="f in frutas" :key="f">{{f}}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
  </div>
</template>

<script>
import Frutas from './components/Frutas.vue'
import frutasMixin from '@/frutasMixin'
import usuarioMixin from '@/usuarioMixin'

export default {
  components: { Frutas },
  // um mixin é uma "mistura", é como se ele
  // fizesse um merge do que está dentro
  // do mixin com o componente
  mixins: [frutasMixin, usuarioMixin],
  data() {
    return {
      cpf: '11122233388',
      // com mixins não precisa mais de duplicidades
      // fruta: '',
      // frutas: ['banana', 'maçã', 'laranja']
      // ---------------------------------------------
      // Caso aqui tenha o mesmo objeto que no mixin,
      // este tem prioridade sobre o mixin. Ex.:
      // frutas: ['abacate', 'abacaxi']
      // Será exibido apenas 'abacate' e 'abacaxi'
      // no v-for do componente
      // ---------------------------------------------
    }
  },
  filters: {
    cpf(valor) {
      const arr = valor.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')

      return arr.join('')
    }
  },
  // com mixins não precisa mais dessa duplicidade
  // methods: {
  //   add() {
  //     this.frutas.push(this.fruta)
  //     this.fruta = ''
  //   }
  // }
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
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
