const { createApp } = Vue;

createApp({
  data() {
    return {
      nome: "Rafael Fernandes de Oliveira",
      idade: 40,
      url: "https://fotospublicas.com/wp-content/uploads/2023/05/52884908371_059545c793_k-1024x1024.jpg",
    };
  },
  methods: {
    randomico() {
      return Math.random();
    },
  },
}).mount("#desafio");
