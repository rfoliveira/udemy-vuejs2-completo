<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            adicionar() {
                this.contador++;
            },
            subtrair() {
                this.contador--;
            }
        }
    }
</script>

<!-- 
    Caso não tenha o ".contador" na definição do css
    esse será considerado em toda a aplicação. 
    Ex: span { ... }, todo span terá esse estilo

    Para que o estilo fique atribuído apenas para o 
    componente dele, sem que esse tenha uma classe específica,
    precisa colocar "scoped" no style.
    Ex: <style scoped> ... </style>

    O uso so <style scoped> aplica o css apenas ao filho direto do 
    elemento que ele se aplica, não aos "filhos dos filhos".
    Ex: Considerando
    <template>
        <div class="algum-estilo">
            <h1>Título</h1>
            <app-outro-componente />
        </div>    
    </template>,

    <style scoped>...</style>
    
    Não irá repassar para o componente, o css,
    mas sim apenas para o <h1>
-->
<style>
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 20px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>