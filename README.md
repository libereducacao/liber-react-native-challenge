<<<<<<< HEAD
# cars-marketplace
# cars-marketplace
=======
# Desafio React Native - Liber

## Index

- [Desafio React Native - Liber](#Desafio-React-Native---Liber)
	- [**Index**](#Index)
	- [**Introdução**](#Introdu%C3%A7%C3%A3o)
	- [**Descrição**](#Descri%C3%A7%C3%A3o)
	- [**Apresentação**](#Apresenta%C3%A7%C3%A3o)
	- [**Avaliação**](#Avalia%C3%A7%C3%A3o)
	- [**Envio**](#Envio)
	- [**Observações Finais e Prazo**](#Observa%C3%A7%C3%B5es-Finais-e-Prazo)

## **Introdução**

Seu desafio será criar uma aplicação React Native capaz de interagir com a seguinte API RESTful de carros: https://deividfortuna.github.io/fipe/.

## **Descrição**

O objetivo da aplicação será replicar uma interface para visualizar dados de carros de uma marca aleatória a cada vez que você reiniciar o app, utilizando as seguintes referências:

**Protótipo:** https://xd.adobe.com/view/c1352240-1398-474b-76a5-589b836fc663-b704

**Dev:** https://xd.adobe.com/spec/81b9d0f0-3d5b-4a2c-73a5-ad7c859a508a-f788/

Note que você conseguirá baixar todos os assets necessários através do link de dev acima. Basta clicar sobre a imagem/ícone e usar o botão azul "Baixar" do lado direito. Além disso, através desse link você conseguirá acessar todas as informações de estilo que você precisará para desenvolver as telas. O link do protótipo servirá para você visualizar o funcionamento das telas e interagir com as mesmas.

A primeira tela, corresponde a uma lista de carros com as seguintes informações: marca, modelo, câmbio e preço. Vale notar que essa API retorna informações a mais no campo de modelo. Nesse caso o seu desafio será tratar essa informação de modo que nessa tela seja mostrado apenas o nome do modelo, sem essas informações adicionais. 

**Exemplos**: 

| Modelo | Resultado |
---------| -----------
| Fit EX/ S 1.5/ EX 1.5 Flex 16V 5p Mec. | Fit EX/ S |
| Fit EXL 1.5 Flex 16V 5p Mec | Fit EXL |
| HR-V EXL 1.8 Flexone 16V 5p Aut. | HR-V EXL |

**A única informação adicional que você utilizará nessa tela será a de câmbio**, que nem sempre estará disponível. Nesse caso, você não deve mostrar nada.

**Com relação a pesquisa**, basta que o usuário seja capaz de filtrar a lista pelo modelo. Vale lembrar que a lista deve estar com os modelos filtrados conforme a tabela anterior.

Ao clicar em um dos itens da lista acima, o usuário deverá ir para uma nova tela que mostrará mais detalhes do carro.

Para essa segunda tela, você mostrará as seguintes informações do veículo selecionado anteriormente: ano, marca, modelo, combustível, potência, cilindras, preço e código FIPE. Note que, assim como no caso anterior, essas informações nem sempre estão disponíveis e estão misturadas no meio da string de modelo. Nesse caso, diferentemente da tela anterior, você deve colocar a string **"Indisponível"** no local da informação. **Faz parte do desafio o tratamento dessas informações para mostrar ao usuário**. Por fim, não se esqueça do botão de voltar para a tela anterior.

**Observação importante**: Em ambas as telas o formato de visualização das strings deve ser seguido à risca, por exemplo: **"Marca - Modelo (Ano)"** deve virar **"Honda - Fit EXL (2014)"**.

## **Apresentação**

É obrigatório que além do código desenvolvido, exista uma documentação detalhando como você chegou na solução apresentada. Além disso, é fundamental expor um passo a passo de como executar a aplicação desenvolvida.

## **Avaliação**

A avaliação será centrada na sua capacidade de organização, arquitetura de software e utilização de boas práticas como design patterns. Além disso, sua capacidade de replicar a interface visual proposta será um ponto chave.

## **Envio**

Você deverá fazer um fork desse repositório e enviar um pull request com a sua solução.

## **Observações Finais e Prazo**

O desafio deverá ser entregue em até 48 horas após o recebimento.
>>>>>>> 459436c87002356de8b1bcdbde91e84719e9e536
