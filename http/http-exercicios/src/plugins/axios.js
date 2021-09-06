import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-3d782-default-rtdb.firebaseio.com/'

// Headers globais podem ser criados assim:
// axios.defaults.headers.common['Authorization'] = 'abc123'
// ou pegando apenas em requisições do tipo get, por exemplo:
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // É definido um atributo de forma global
        // referenciando o axios
        // Vue.prototype.$http = axios

        // Criação de várias instâncias do axios, 
        // matendo as configurações para esta instância.
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-3d782-default-rtdb.firebaseio.com/',
            headers: {
                // Neste caso, esse cabeçalho só será usado em 
                // requisições get
                get: {
                    'Authorization': 'abc123'
                }
            }
        })

        // Definindo interceptors para tratar 
        // todas as requisições e respostas http.
        // Este é um interceptor de requisição
        Vue.prototype.$http.interceptors.request.use(config => {
            // Neste caso irá mostrar qual método de requisição foi usado (get. post, etc...)
            console.log(config.method)

            // Caso eu queira alterar para toda requisição post
            // ser enviada como put, podemos fazer dessa forma
            // if (config.method == 'post') {
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error))

        // Interceptor de resposta
        // Neste caso, uso interceptor para transformar o objeto de retorno
        // para que em todo objeto de resposta, seja atribuído a propriedade "id"
        // do objeto.
        /*
        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []
            // for-in no javascript percorre os atributos e não os valores
            for (const chave in res.data) {
                array.push({ id: chave, ...res.data[chave] })
                // ou poderia ser assim
                // array.push({ id: chave, nome: res.data[chave].nome, email: res.data[chave].email })
            }

            res.data = array

            // Retornando ao fluxo normal
            return res
        }, error => Promise.reject(error))
        */
    }
})