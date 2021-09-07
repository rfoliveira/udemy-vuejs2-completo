<template>
    <nav class="menu">
        <ul>
            <!-- A propriedade "exact" é para garantir que a classe só será aplicada
            se for exatamente a url, ex.: "/", no caso.
            Do contrário como "/" também está na url de "/usuario",
            a classe seria aplicada para ambas, não diferenciando quem está ativo -->
            <li><router-link to="/" active-class="active" exact>Início</router-link></li>
            <li><router-link to="/usuario/20" active-class="active">Usuário</router-link></li>

            <!-- Nesse caso, ao mudar de um usuário para o outro, não irá mudar o valor do parâmetro.
            Se eu clicar no botão "Início" e depois no "Usuário 30", funciona -->
            <!-- <li><router-link to="/usuario/30" active-class="active">Usuário 30</router-link></li> -->
            <!-- Para corrigir o problema acima, é preciso criar um watch no componente Usuario -->
            <li><router-link to="/usuario/30" active-class="active">Usuário 30</router-link></li>
        </ul>
        <!-- Pode ser assim também -->
        <!-- <ul>
            <router-link to="/" tag="li"><a>Início</a></router-link>
            <router-link to="/usuario" tag="li"><a>Usuário</a></router-link>
        </ul> -->
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>