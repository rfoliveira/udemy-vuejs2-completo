import Vuew from 'vue';

export default new Vuew({
    methods: {
        setUsuarioSelecionado(usuario) {
            this.$emit('usuarioSelecionado', usuario);
        },
        onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback);
        }
    }
})