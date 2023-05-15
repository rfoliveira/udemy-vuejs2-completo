const { createApp } = Vue;

createApp({
  data() {
    return {
      valor: "",
    };
  },
  methods: {
    showAlert() {
      alert(
        `Valor do campo texto = ${this.valor != "" ? this.valor : "nenhum"}`
      );
    },
    myKeyUp(event) {
      this.valor = event.target.value;
    },
  },
}).mount("#desafio");
