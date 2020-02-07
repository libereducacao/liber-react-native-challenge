<h1 align="center">
    <img alt="GoBarber API" src="./asset/gobarber_gostack.png" />
    <br>
    Desafio React Native - Liber Educação
</h1>

<h4 align="center">
  Esse é um aplicativo que realiza consulta em uma API externa para retornar informações sobre preços médios de veículos no mercado nacional.
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/patrickt26/gobarber-backend.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/patrickt26/gobarber-backend.svg">

  <img alt="GitHub" src="https://img.shields.io/github/license/patrickt26/gobarber-backend.svg">
</p>

<p align="center">
  <a href="#memo-desafio">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-aplicação">Aplicação</a>
</p>

## :memo: Desafio

Esse é um projeto desenvolvido como solução ao desafio de processo seletivo da [Liber Educação](http://www.liberedu.com.br).

O desafio consistia em desenvolver uma aplicação utilizando React Native capaz de interagir com a API REST de carros FIPE API.

[Github](https://github.com/deividfortuna/fipe)
[Docs](https://deividfortuna.github.io/fipe/)

Tendo ainda como base para a interface, o protótipo proposto por eles em [Protótipo](https://deividfortuna.github.io/fipe/).

[Repositório Desafio](https://github.com/libereducacao/liber-react-native-challenge)

## :iphone: Aplicação

<h4>Tela Principal</h4>

Em questões de funcionalidade, em sua página inicial, a aplicação inicia realizando uma requisição à API, retornando um array de objetos contendo as marcas dos carro, a qual a aplicação escolhe uma marca aletoriamente, e então retorna uma lista dos carros apenas da marca escolhida, assim, apresentando algumas informações de cada carro, como Modelo(informação que recebeu tratamento para ficar melhor apresentável), Tipo de Câmbio(Manual ou Automático, podendo ainda essa informação não ser retornada da requisição),

Essa funcionalidade de "sortear" uma marca acontece toda vez que a aplicação é aberta.

Ainda na página inicial, existe um campo de busca, que filtra a lista de carros pelo Modelo, conforme o usuário digita o nome.

<h4>Tela de Detalhe</h4>

Ao seleciona um carro da lista apresentada na página principal, o usuário é redirecionado para a página de detalhe do carro selecionado.

## :rocket: Tecnologias

As principais tecnologias utilizadas foram:

-  [Node.js][nodejs]
-  [Express](https://expressjs.com/)
-  [nodemon](https://nodemon.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [Docker](https://www.docker.com/docker-community)
-  [Sequelize](http://docs.sequelizejs.com/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [node-postgres](https://www.npmjs.com/package/pg)
-  [VS Code][vc] com [ESLint][vceslint] e [EditorConfig][vceditconfig]
-  [Prettier][prettier]

---

Feito com ♥ por Patrick Thomaz :wave: [Get in touch!](https://www.linkedin.com/in/patrick-thomaz/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://prettier.io
