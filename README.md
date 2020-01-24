# Desafio React Native - Liber

## Instalação
* Com git instalado, clone o repositório ou faça o download.
* Com node e npm instalados, navegue até a pasta raiz do projeto utilizando terminal e instale as dependências executando "npm install".
* Ao instalar as dependências e com o aparelho conectado via USB, execute "react-native run-android --variant=release" no terminal para instalar no Android

## Notas
* Comentários com detalhes da solução estão dentro dos códigos.
* Como não consegui encontrar a fonte do prototípo, estou utilizando Roboto.
* Android são suporta box-shadow/sombras, então o container na tela de detalhes esta somemente com elevação/sombra básica
* Por questão de performance e testes, o número de modelos a ser buscado pela API está limitado. Para remover o limite, altere a váriavel "limiteDeModelos" no arquivo "api.js". (0 = Sem limite)