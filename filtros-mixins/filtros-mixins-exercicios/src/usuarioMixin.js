export default {
    computed: {
        usuarioLogado() {
            return 'Maria Silva'
        }
    },
    created() {
        window.console.log('Created - usuarioMixin')
    }
}