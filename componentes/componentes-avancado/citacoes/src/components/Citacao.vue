<template>
    <div class="citacao">
        <!-- forma padrão usando propriedade -->
        <!-- {{ texto }} -->

        <!--  para ler aquilo que foi passado
        dentro do corpo do componente.
        Pode ficar dentro de qualquer tag, tal como 
        <div><slot></slot></div>

        Se triplicar os que foi passado para o <slot>, basta definir mais de uma vez
        <slot></slot>
        <slot></slot>
        <slot></slot>

        Posso nomear um slot para deixar implicito seu conteúdo
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
        Nesse caso preciso definir na chamada do componente o nome do slot,
        do contrário ele vai assumir o slot passado padrão 

        Posso usar um slot padrão junto com slots nomeados, 
        basta não atribuir um nome ao slot, que ele será considerado como padrão 
         -->
        <slot name="fonte"></slot>
        <slot name="texto"></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>
export default {
    // props: ['texto']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    /* tanto consigo aplicar aqui
    quanto no elemento que será renderizado.
    Deve-se tomar cuidado para não haver conflito de ter o mesmo css 
    aplicado em arquivos diferentes */
    /* h1 {
        color: red;
    } */
</style>
