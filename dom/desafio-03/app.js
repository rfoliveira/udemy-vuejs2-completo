const { createApp } = Vue;
createApp({
  data() {
    return {
      valor: 0,
    };
  },
  computed: {
    resultado() {
      return this.valor != 37 ? "Valor Diferente" : "Valor Igual";
    },
  },
  watch: {
    resultado() {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
}).mount("#desafio");
