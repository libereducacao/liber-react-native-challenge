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
  <a href="#iphone-aplicação">Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-executando">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>
</p>

## :memo: Desafio

Esse é um projeto desenvolvido como solução ao desafio de processo seletivo da [Liber Educação](http://www.liberedu.com.br).

O desafio consistia em desenvolver uma aplicação utilizando React Native capaz de interagir com a API REST de carros FIPE API.

[Github](https://github.com/deividfortuna/fipe)
[Docs](https://deividfortuna.github.io/fipe/)

Tendo ainda como base para a interface, o protótipo proposto por eles em [Protótipo](https://deividfortuna.github.io/fipe/).

[Repositório Desafio](https://github.com/libereducacao/liber-react-native-challenge)

## :clipboard: Executando

Com a aplicação em sua máquina, execute o comando yarn na pasta raiz do projeto para baixar todas as depêndencias necessárias para rodar a aplicação.

<h4> Dependendo de qual dispositivo for rodar a aplicação, inicie o projeto em modo desenvolvimento com o seguinte comando: </h4>

<h4> iOS: (funciona apenas em sistema MacOS) </h4>

````
react-native run-ios
````

<h5>
Para testes, utilize emulador como o Simulador do XCode.
</h5>

<h4> Android </h4>

````
react-native start
````

e em seguida, rodar o comando:

````
react-native run-android
````

<h5>
Para testes, utilize dispositivo físico ou emulador como o AVD do AndroidStudio.
</h5>

## :iphone: Aplicação

<h3>Tela Principal</h3>

Em questões de funcionalidade, em sua tela inicial, a aplicação inicia realizando uma requisição à API, retornando um array de objetos contendo as marcas dos carro, a qual a aplicação escolhe uma marca aletoriamente, e então retorna uma lista dos carros apenas da marca escolhida, assim, apresentando algumas informações de cada carro, como Modelo(informação que recebeu tratamento para ficar melhor apresentável), Tipo de Câmbio(Manual ou Automático, podendo ainda essa informação não ser retornada da requisição),

Essa funcionalidade de "sortear" uma marca acontece toda vez que a aplicação é aberta.

Ainda na tela inicial, existe um campo de busca, que filtra a lista de carros pelo Modelo, conforme o usuário digita o nome.

<h3>Tela de Detalhe</h3>

Ao seleciona um carro da lista apresentada na tela principal, o usuário é redirecionado para a tela de detalhe do carro selecionado, onde é realizada uma nova requisição à API para retornar mais informações a respeito do carro selecionado.

Nesse tela são exibidas informaçoes como Marca, Modelo, Ano, Valor, Tipo de Combustível, Código e etc.

O Valor de um mesmo carro varia de acordo com o ano do carro, e por isso achei válido acrescentar uma funcionalidade que não estava no escopo original.
Pela forma como tem que ser feita a requisição à API, é preciso informar primeiro o ano do carro, para então se obter as informações detalhadas do mesmo, como o Valor, por exemplo. Em sua primeira requisição, é exibido o ano mais atual do carro. Por isso incluí um Picker de seleção listando os anos disponíveis do carro seleciona, bastando o usuário apenas selecionar o ano desejado no Picker para saber o Valor do carro em outro ano.

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
