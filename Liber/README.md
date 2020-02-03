# Desafio React Native - Liber

## **Index**
- [Desafio React Native - Liber](#desafio-react-native---liber)
  - [**Index**](#index)
  - [**Instalação**](#instala%c3%a7%c3%a3o)
  - [**Detalhes da solução**](#detalhes-da-solu%c3%a7%c3%a3o)


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

Para mostrar a lista de carros disponíveis, primeiramente ao iniciar o app ele faz uma requisição e guarda os códigos de todas as marcas que a api retornou em um vetor:

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


Com o vetor com todos os códigos das marcas disponíveis o app realiza outra requisição à api para cada marca, recebendo um vetor de objetos com os modelos disponiveis e um vetor de objetos com os anos. Após isso o app tenta fazer uma requisição com a combinação entre anos e modelos, caso a requisição retorne com sucesso o objeto do carro é adicionado ao vetor de carros:
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
