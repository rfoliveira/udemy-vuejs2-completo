# stock-trader

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploy na AWS 
Obs.: está sendo usado a free tier de 12 meses. Quando terminar de testar, remover tudo para não gerar cobrança

1) Gerar build de produção
- Executar npm run build
-> Será criado uma pasta dist que é a pasta que precisa subir para o servidor

2) Deploy no S3
- S3 (repositório de arquivos):
-- Criar um bucket (com uma url válida porque será dentro desse domínio que a aplicação será publicada)
-- Na 3a tela, desmarcar os checks em "Manage public bucket policies for this bucket"
-- Após a criação do bucket, entrar na pasta dist e selecionar tudo para dentro do bucket
-- Clicar em "next" e disponibilizar com acesso público para leitura, depois "next, next, finish"
-- Em properties, habilitar "Static website hosting", especificando o index e salvar
-- Pronto, está publicado na internet
Obs.: o nome do bucket tem que ser o mesmo da url a ser publicada

3) Configurando o registro.br para apontar para o domínio registrado na aws
Obs.: o instrutor possui um domínio registrado "auladeprogramacao.com.br", que foi usado por ele para demonstrar
- Home > Sistema > FreeDNS
-- Colocar uma nova entrada, CNAME
-- Colocar qualquer nome, ex.: "vuejstemp"
-- Colocar o caminho do DNS no S3 sem o http:// e sem o "/" no final
-- Adicionar e salvar
-- Em uns 20 a 30 minutos o caminho http://vuejstemp.CAMINHO-DNS-NO-S3 estará disponível

4) Criar um certificado SSL na AWS
- Certificate Manager
-- É gratuito, a AWS não cobra mesmo fora do free tier
-- Especificar o domínio, ex.: vuejs.auladeprogramacao.com.br
-- A Amazon irá pedir uma validação que eu sou o proprietário do domínio que estou registrando o SSL
-- Copiar o nome da chave SSL criada
-- No registro.br, adicionar uma chave CNAME de acordo com o informado na aws

5) Criando CDN com CloudFront
Usado para criar uma distribuição em vários locais do mundo, para quem estiver acessando o site
- Create distribution
- Selecionar o domínio criado
- Redirecionar tudo para https
- Colocar em "alternate domain names (CNAMEs)" o domínio do site
- Marcar para usar um certificado customizado, selecionando o certificado do ssl criado anteriormente
- Default root object = index.html
- Save / Create (isso replicará a aplicação em vários servidores)

6) Registrar o domínio do CloudFront no registro.br
- Entrar no CloudFront, pegar o nome do domínio criado lá e adicionar como CNAME no registro.br
- Pronto