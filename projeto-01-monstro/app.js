new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },
        attack(especial) {
            // console.log(especial, this.getRandom(5, 10));
            // ataque do jogador
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player');
            
            // Geralmente o jogador perde mais que o monstro...
            // Ataque do monstro
            if (this.monsterLife > 0)
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },
        hurt(prop, min, max, especial, source, target, css) {
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);

            // Para evitar que o playerLife do usuário seja negativo
            // Em JS para obter uma propriedade de um objeto json
            // podemos usar:
            // var pessoa = { nome: 'Fulano', idade: 22 }
            // pessoa.nome => 'Fulano'
            // pessoa['nome'] => 'Fulano'
            this[prop] = Math.max(this[prop] - hurt, 0);

            this.registerLog(`${source} atingiu ${target} com ${hurt}`, css);
        },
        healAndHurt() {
            const healValue = this.heal(10, 15);
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');

            this.registerLog(`Jogador ganhou força de ${healValue}`, 'player');
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);

            return heal;
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registerLog(text, css) {
            // Significa que vai sempre adicionar no início do array
            // movendo os existentes para o final
            this.logs.unshift({ text, css });
        }
    },
    watch: {
        hasResult(value) {
            this.running = !value;
        }
    }
})