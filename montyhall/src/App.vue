<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <!-- <Door :number="1" :hasGift="false" /> -->
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <input type="text" id="portsAmount" size="3"
          v-model.number="portsAmount">
      </div>
      <!-- Este trecho está comentado porque coloquei
      a porta premiada para ser escolhida de forma aleatória -->
      <!-- <div v-if="!started">
        <label for="selectedPort">Qual a porta premiada?</label>
        <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
      </div> -->
      <button v-if="!started" @click="iniciar">Iniciar</button>
      <button v-if="started" @click="reiniciar">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from './components/Door.vue'

export default {
  components: { Door },
  data() {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null
    }
  },
  methods: {
    iniciar() {
      const min = 1
      const max = this.portsAmount
      // Ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      const awardedDoor = Math.floor(Math.random() * (max - min + 1) + min)
      
      this.selectedPort = awardedDoor
      this.started = true
    },
    reiniciar() {
      this.started = false
      this.selectedPort = null
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  color: #fff;
  /* Gradiente gerado em https://uigradients.com */
  background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form, .form input, .form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
