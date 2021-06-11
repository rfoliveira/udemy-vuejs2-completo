new Vue({
	el: '#desafio',
	data: {
		classeEfeito: '',
		classeDoInput: '',
		classeDoInput2: '',
		atribuirCSS: false, 
		estilosDoinput: '',
		estilosDoinput2: '',
		progresso: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeEfeito = this.classeEfeito === 'destaque' 
					? 'encolher' 
					: 'destaque';
			}, 2000);
		},
		iniciarProgresso() {
			this.progresso = 0;

			var interval = setInterval(() => {
				if (this.progresso < 100) {
					this.estilosDoinput2 = {
						backgroundColor: 'red',
						width: `${this.progresso += 10 }px`
					};
				}
				else {
					this.estilosDoinput2 = {
						backgroundColor: 'green',
						width: `${this.progresso += 10 }px`,
						color: 'white'
					};
					clearInterval(interval);
				}
			}, 500);
		}
	},
	computed: {
		classeComputada() {
			return `${this.classeDoInput2} ${this.atribuirCSS ? 'fundo-verde' : ''}`;
		},
		msgProgresso() {
			return `${
				this.progresso > 0 
					? this.progresso < 100 
						? 'Processando ' + this.progresso + '%...' 
						: 'Concluído!'
					: ''
				} `;
		}
	}
})
