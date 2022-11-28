<p align="center">
  <h1 align="center"><a href="https://food3xplorer.netlify.app/">Food Explorer - Rocketseat Explorer :rocket: </a></h1>
</p>

<p align="center">
  <img width="550" height="99" src="https://user-images.githubusercontent.com/106932234/204160165-1936c0db-539f-4a11-bf5e-1f3d3f789896.png">
</p>

Este é o resultado do desafio final do Explorer, o Food Explorer.
<br>
Nele realizei a criação do FrontEnd e do BackEnd completo da aplicação.

___

## 💻 Sobre
O Food Explorer é uma aplicação web de um restaurante. Após se cadastrar na plataforma o usuário estará apto a criar os pedidos e acompanhar o status dele. Há ainda uma customização de perfil, filtragem de favoritos, campo de busca e seção de contato com o restaurante. O carrinho é 100% funcional e o usuário pode escolher entre 2 formas de pagamento (cartão ou Pix). O Administrador terá a capacidade de criar/editar/remover os pratos da forma que desejar. Ele poderá ainda alterar o status dos pedidos, de acordo com a linha de preparo dos mesmos na cozinha. Este status será imediatamente atualizado na tela dos consumidores. O projeto conta com diversos "extras" que adicionei, como a possibilidade de mudança de tema da página, customização do perfil do usuário(avatar, nome e senha), conta ainda com diversos efeitos visuais e o mais importante de tudo: É responsivo para a utilização em diversos tipos de dispositivos!

Este repositório contém os dados do Frontend da minha aplicação em React.js e do BackEnd em Node.js.

___

## 🎨 Layout
A página inicial em formato desktop é vista na imagem abaixo:

![foodexplorer vercel app_](https://user-images.githubusercontent.com/106932234/204163348-5f06ae24-3ede-4bae-b68a-770493d1a286.png)

![foodexplorer vercel app_ (1)](https://user-images.githubusercontent.com/106932234/204163350-1d4c8a96-f68a-4eb0-aa8e-5343e2681749.png)

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [ReactJs](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com)
- [Nodemon](https://nodemon.io/)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex](https://knexjs.org/)
- [BCryptjs](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [Multer](https://www.npmjs.com/package/multer)
- [CORS](https://www.npmjs.com/package/cors)
- [Axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Swiper](https://swiperjs.com/)
- [React Router Dom](https://react-icons.github.io/react-icons/)

___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:andreviapiana/Food-Explorer.git
```
___

#### 🚧 Executando o BackEnd
```bash
# No BackEnd insira uma porta e um secret no arquivo .env vazio
  AUTH_SECRET=
  PORT=

# Navegue até o diretório do BackEnd
$ cd food-explorer-backend

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do BackEnd
$ npm run dev
```
___

#### 💻 Executando o FrontEnd
```bash
# Navegue até o diretório do FrontEnd
$ cd food-explorer-frontend

# Instale as dependências necessárias
$ npm install

# Agora inicie o servidor do FrontEnd
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

  http://localhost:5173/
```

#### 🔑 Quer ver como a aplicação funciona vista pelo Admin? Use a conta a seguir:

```bash
  e-mail: admin@foodexplorer.com
  senha: 123456
```
___

Este BackEnd foi hospedado diretamente no Render.
Já o Frontend foi hospedado diretamente no Netlify.

___
Obs.: Por estar hospedado em um serviço gratuito, o BackEnd "hiberna" após 15 minutos sem utilização.
<br>
Se você está tentando acessar o site e o BackEnd não responde, apenas aguarde, pois ele estará "inicializando" os serviços.
<br>
Esta etapa poderá demorar até 1 minuto, dependendo da carga nos servidores do Render.

[O resultado FINAL pode ser visto aqui](https://food3xplorer.netlify.app/)
