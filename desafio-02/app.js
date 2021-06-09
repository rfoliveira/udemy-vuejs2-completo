new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Clicou no botão');
        },
        definirData(e) {
            this.valor = e.target.value;
        }
    },
})