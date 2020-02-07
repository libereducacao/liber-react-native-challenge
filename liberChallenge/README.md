<h1 align="center">
    Desafio React Native - Liber Educação
</h1>

<h4 align="center">
  Esse é um aplicativo que realiza consulta em uma API externa para retornar informações sobre preços médios de veículos no mercado nacional.
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/patrickt26/liber-react-native-challenge.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/patrickt26/liber-react-native-challenge.svg">
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

-  [React Native](https://facebook.github.io/react-native/)(v.0.61.5)
-  [Axios](https://github.com/axios/axios)(v.0.19.2)
-  [React Navigation](https://reactnavigation.org)(v.4.1.1)
-  [React Vector Icons](https://github.com/oblador/react-native-vector-icons)(v.6.6.0)
-  [Styled Components](https://styled-components.com)(v.5.0.1)
-  [VS Code][vc] com [ESLint][vceslint](v.6.8.0) e [EditorConfig][vceditconfig](v.0.14.4)
-  [Prettier][prettier](v.1.19.1)

---

Feito com ♥ por Patrick Thomaz :wave: [Get in touch!](https://www.linkedin.com/in/patrick-thomaz/)

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://prettier.io
