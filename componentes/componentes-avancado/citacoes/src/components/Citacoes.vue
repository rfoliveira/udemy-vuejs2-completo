<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- {{ numero }} {{ indice }} -->
        <!-- exemplo de uso -->
        <!-- {{ citacoes[indice].texto }} -->
        <!-- assim também funcionaria
            {{ citacoes[indice()].texto }}
         -->
         <!-- usando props, será exibido dentro do div do componente -->
         <!-- <Citacao :texto="citacoes[indice].texto" /> -->
         <!-- Quero mandar no corpo do componente ao invés de propriedade -->
         <Citacao>
             <!-- usando slots nomeados -->
             <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
             <p slot="texto">{{ citacoes[indice].texto }}</p>
             <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
         </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue';

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* tanto consigo aplicar aqui
    quanto no elemento que será renderizado.
    Deve-se tomar cuidado para não haver conflito de ter o mesmo css 
    aplicado em arquivos diferentes */
    /* h1 {
        color: green;
    } */
</style>
