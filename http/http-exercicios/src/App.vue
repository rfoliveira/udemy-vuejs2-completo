<template>
  <div id="app" class="container">
    <h1>HTTP com axios</h1>
    <b-alert show dismissible v-for="msg in mensagens" :key="msg.texto" :variant="msg.tipo">
      {{msg.texto}}
    </b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg"
          v-model="usuario.nome"
          placeholder="Informe o nome"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input type="email" size="lg"
          v-model="usuario.email"
          placeholder="Informe o e-mail"></b-form-input>
      </b-form-group>
      <hr>
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="listar" size="lg" variant="success" class="ml-2">Listar</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome: </strong>{{usuario.nome}}<br />
        <strong>E-mail: </strong>{{usuario.email}}<br />
        <strong>ID: </strong>{{ id }}<br />
        <b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
        <b-button variant="danger" size="lg" @click="excluir(id)" class="ml-2">Excluir</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
// Para uso do azios localmente, basta importar ele e 
// usar normalmente. Ex.:
// import axios from 'axios'
// Dentro do método:
// axios.post(...), etc...
export default {
  // Apenas teste
  // created() {
  //   this.$http.post('usuarios.json', {
  //     nome: 'Naria',
  //     email: 'maria_silva@teste.com'
  //   }).then(res => console.log(res))
  // }
  data() {
    return {
      usuario: {
        nome: '',
        email: ''
      },
      usuarios: [],
      id: null,
      mensagens: []
    }
  },
  methods: {
    salvar() {
      // console.log(this.usuario)
      // this.$http.post('usuarios.json', this.usuario)
      //   .then(res => {
      //     this.limpar()
      //     // console.log(res)
      //   })
      //   .catch(err => console.error(err))

      // considerando tandto "patch" como "post"
      const metodo = this.id ? 'patch' : 'post'
      const finalUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
        .then(() => {
          this.mensagens.push({
            texto: 'Operação realizada com sucesso!',
            tipo: 'success'
          })
          setTimeout(() => {
            this.limpar()
          }, 2000)
        })
        .catch(err => console.error(err))
    },
    listar() {
      // this.$http.get('usuarios.json')
      this.$http('usuarios.json').then(res => { 
        this.usuarios = res.data 
      })
      .catch(err => console.error(err))
    },
    carregar(id) {
      this.id = id
      // Para não alterar a instância atual, 
      // crio um novo objeto
      this.usuario = { ...this.usuarios[id] }
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`)
        .then(() => {
          this.mensagens.push({
            texto: 'Operação realizada com sucesso!',
            tipo: 'success'
          })
          setTimeout(() => {
            this.limpar()
          }, 2000)
        })
        .catch(err => {
          this.mensagens.push({
            texto: `Erro ao excluir: ${err.message}`,
            tipo: 'danger'
          })
        })
    },
    limpar() {
      this.usuario.nome = ''
      this.usuario.email = ''
      this.id = null
      this.mensagens = []
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
