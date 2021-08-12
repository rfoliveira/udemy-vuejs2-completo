<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn()">Reiniciar nome (Callback)</button>
        <!-- ou sem abre e fecha parenteses
            <button @click="reiniciarFn">Reiniciar nome (Callback)</button>
         -->
    </div>
</template>

<script>
import barramento from '@/barramento';
export default {
    // props: ['nome'], // ok, mas sem validação
    // com validação
    // props: {
    //     nome: String
    // },

    // outra forma com validação 
    // props: {
    //     nome: {
    //         type: String,
    //         required: true
    //     }
    // }

    // outra forma, sem ser requerido
    props: {
        nome: {
            type: String,
            default: 'Anônimo'
        },
        reiniciarFn: {
            type: Function
        },
        idade: {
            type: Number
        }
    },

    // O valor padrão pode ser gerado por uma função
    // exemplo qualquer
    // props: {
    //     nome: {
    //         type: String,
    //         default: function() {
    //             return Array(10).fill(0).join(',');
    //         }
    //     }
    // },

    // Não se pode definir uma outra propriedade com o mesmo nome
    // Sendo assim, poderia pegar o valor e trabalhar nele
    // data() {
    //     return {
    //         nomeAlternativo: this.nome
    //     }
    // },
    methods: {
        inverterNome() {
            // para demonstrar que essa propriedade pode
            // ser manipulada nos componentes filhos
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            // const antigo = this.nome;
            this.nome = "Pedro";
            // Como o filho não sabe quem foi o pai,
            // para notificar o pai, deve-se definir um 
            // evento no pai e emitir para esse evento 
            // passando o objeto que está sendo alterado / definido
            this.$emit('nomeMudou', this.nome);
            // ou, caso um objeto
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     antigo
            // });
        }
    },
    created() {
        // no momento da criação do componente
        // ele vincula essa instrução de callback para ser chamava sempre
        // que ocorrer o evento 'idadeMudou' no barramento
        // barramento.$on('idadeMudou', idade => {
        //     this.idade = idade;
        // });
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade;
        });
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
