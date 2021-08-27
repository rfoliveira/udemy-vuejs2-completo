// Forma que o instrutor usou
export default {
    computed: {
        trocaEspacosPorVirgula3() {
            return this.frase.replace(/\s/g, ',')
        },
        contaEMostra3() {
            return this.frase.split(' ').map(t => `${t} (${t.length})`).join(' ')
        }
    }
}

// Para usar no componente
// html
// <p>{{ frase | trocaEspacosPorVirgula3 }}</p>
// <p>{{ frase | contaEMostra3 }}</p>
// script
// export default {
//     data() {
//         return {
//             frase: ''
//         }
//     }
// }