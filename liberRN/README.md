# Desafio React Native - Liber

## **Rodando o projeto**

Com um emulador rodando ou com algum celular conectado no computador, digite:

``` react-native run-android ```

## **Descrição do sistema**

O sistema funciona da seguinte maneira:

 - Ao iniciar o aplicativo é feita uma chamada a API para buscar as marcas, e selecionado uma marca aleatória.
 - Usando a marca, é feito outra chamada buscando os modelos, com um limite de 5 resultados para não prejudicar no desempenho, já que existem marcas com dezenas de carros.
 - Em seguida, para cada modelo de carro, é feito outra chamada na API buscando seu ano de fabricação (escolhido 1 aleatoriamente).
 - Com a marca, modelo e ano de cada carro, é feito a última chamada a API que retorna todas as informações do carro.

## Estado da aplicação

Criei 2 arrays no estado da aplicação: Carros e CarrosFiltrados, os dois recebem os carros que a API retorna.

Carros é um array que guarda todos os carros vindos da API e não muda durante a execução da aplicação

CarrosFiltrados é um array que muda conforme o usuário digita algo no campo de busca. 

### Exemplo: 

temos 5 carros: A, B, C, AB, BB

usuário digitou: a

O array CarrosFiltrados filtra do array Carros (sem mudá-lo) somente os carros que possuem aquilo que o usuário digitou, no nosso caso seriam 2 carros: A e AB

Portanto, os carros mostrados na tela são os que estão no array CarrosFiltrados, caso o usuário não tenha digitado nada ainda, todos os carros são mostrados.

## Tela de Detalhes

Para fazer a navegação entre telas, usei o react-navigation, e ao clicar em um carro na tela de busca, a tela de Detalhes será chamada passando uma propriedade (através do react-navigation) chamada 'carro', que é um objeto contendo todos os dados referentes a aquele carro.

É através desse objeto 'carro' que são mostradas todas as informações na tela.