# Desafio React Native - Liber

## **Index**
- [Desafio React Native - Liber](#desafio-react-native---liber)
  - [**Index**](#index)
  - [**Instalação**](#instala%c3%a7%c3%a3o)
  - [**Detalhes da solução**](#detalhes-da-solu%c3%a7%c3%a3o)
    - [Lista de modelos de carros](#lista-de-modelos-de-carros)
    - [Busca por modelos](#busca-por-modelos)
    - [Tratamento String](#tratamento-string)
  - [**Tela Detalhes**](#tela-detalhes)
  - [**Execução**](#execu%c3%a7%c3%a3o)


## **Instalação**

Para rodar o código em sua máquina, basta seguir os passos a seguir:

Faça um clone do repositório em sua máquina através do terminal:
```
$ git clone https://github.com/rafacdomin/liber-react-native-challenge.git
```
Entre na pasta do projeto e do código:
```
$ cd liber-react-native-challenge/Liber
```
Por fim rode ```yarn``` para instalar todas as dependencias do projeto e rode o app em seu dispositivo ou emulador Android através dos comandos:
```
$ yarn start
$ npx react-native run-android
```

## **Detalhes da solução**

### Lista de modelos de carros

Para mostrar a lista de modelos de carros disponíveis, primeiramente ao iniciar o app ele faz uma requisição e guarda os códigos de todas as marcas que a api retornou em um vetor:

```
const [marcas, setMarcas] = useState([1]);
...
useEffect(() => {
    async function loadMarcas() {
      const response = await api.get('/carros/marcas');
      setMarcas(
        response.data.map(marca => {
          return marca.codigo;
        }),
      );
    }

    loadMarcas();
}, []);
```


Com o vetor com os códigos das marcas disponíveis o app realiza outra requisição a API para cada marca, recebendo um vetor de objetos com os modelos disponiveis e um vetor de objetos com os anos. Após isso o app tenta fazer uma requisição com a combinação entre anos e modelos, caso a requisição retorne com sucesso o objeto do carro é adicionado ao vetor de carros:
```
const [carros, setCarros] = useState([]);
...
useEffect(() => {
    async function loadCarros() {
      setLoading(true);
      let number = marcas[page];

      const res = await api.get(`/carros/marcas/${number}/modelos`);
      const resModelos = res.data.modelos;
      const resAnos = res.data.anos;

      resAnos.map(ano => {
        resModelos.map(async modelo => {
          let resCarro;
          try {
            resCarro = await api.get(
              `/carros/marcas/${number}/modelos/${modelo.codigo}/anos/${
                ano.codigo
              }`,
            );

            setCarros(prevValue =>
              prevValue.includes(resCarro.data)
                ? prevValue
                : prevValue.concat(resCarro.data),
            );
          } catch (erro) {}
        });
      });

      setLoading(false);
      setPage(prevValue => prevValue + 1);
    }

    loadCarros();
}, [marcas, page]);
```

### Busca por modelos

Para realizar a busca por modelos e marcas de carros, o texto do input é passado para uma função que filtra o vetor de carros procurando por marcas ou modelos que correspondam ao que o usuário digitou, por fim é gerado um novo vetor com os modelos ou marcas correspondentes:

```
const [carrosFiltrados, setCarrosFiltrados] = useState();
...
const handleFiltro = async busca => {
    setLoading(true);
    let cars = carros.filter(
      carro =>
        carro.Marca.includes(busca) ||
        carro.Marca.includes(busca.toUpperCase()) ||
        carro.Modelo.includes(busca) ||
        carro.Modelo.includes(busca.toUpperCase()),
    );
    setCarrosFiltrados(cars);
    setLoading(false);
};
```

### Tratamento String

Para tratar a String do modelo e exibir somente parte da informação mostrada utilizei o método split para separar a String a partir de uma expressão regular, para este caso qualquer numero seguido de um ponto (.):
```
split(new RegExp('[0-9]\\.')
```

## Tela Detalhes

Para a navegação entre as telas foi utilizado o react-navigation, onde ao clicar em um dos modelos de carros da lista a tela de Detalhes é chamada, passando junto dela uma propriedade chamada "carro" que por sua vez é um objeto contendo todas as informações recebidas da API sobre aquele modelo:

```
onPress={() => navigation.navigate('Detalhes', {carro: carro.item})}
```


## **Execução**

Para ver imagens do aplicativo em execução acesse a pasta imgs dentro da pasta Liber


