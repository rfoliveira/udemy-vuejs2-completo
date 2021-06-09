new Vue({
    el: '#desafio',
    data: {
        nome: 'Rafael',
        idade: 38,
        imagemUrl: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/FwpEY8AijLzc5Yi5qEtBreBE/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882'
    },
    methods: {
        geraNumeroAleatorio() {
            return Math.random()
        }
    },
})