import axios from "axios"
import { ToastAndroid } from 'react-native';

const limiteDeModelos = 1;

//#ffd500
export const getBrands = () => {
    const url = "http://parallelum.com.br/fipe/api/v1/carros/marcas"
    return axios.get(url).then(({data}) => { //Buscar marcas
        const randomIndex = Math.floor(Math.random() * data.length) // Encontrar um índice aleatório entre a lista de marcas
        ToastAndroid.show('Buscando marcas', ToastAndroid.SHORT);

        return {
            brands: data,
            randomBrand: data[randomIndex].codigo 
        }
    })
}

export const getModels = (brand) => {
    const url = `http://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`
    return axios.get(url).then(({data: { modelos }}) => { //Buscar modelos

        return {
            models: limiteDeModelos ? modelos.slice(0, limiteDeModelos) : modelos,
            brand
        }
    })
}

export const getYears = (brand, model) => {
    const url = `http://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos`

    return axios.get(url).then(({data}) => { //Buscar anos

        return {
            years: data,
            model
        }
    })
}

export const getDetails = (brand, model, year) => {
    const url = `http://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`

    return axios.get(url).then(({data}) => data) //Buscar detalhes do veículo
}

export const getList = () => {
    return getBrands() //Buscar marcas
        .then(({randomBrand}) => getModels(randomBrand) //Buscar modelos
        .then(({models, brand}) => {
            ToastAndroid.show('Buscando veículos', ToastAndroid.SHORT);
            let codePromises = models.map(({codigo}) => getYears(brand, codigo)) //Mapear retornar ano de cada modelo

            return Promise.all(codePromises).then((models) => { //Resolver promessas
                ToastAndroid.show('Buscando detalhes', ToastAndroid.SHORT);

                let yearsMap = models.map(({years, model}) => { //Mapear anos e detalhes
                    return years.map(({codigo}) => getDetails(brand, model, codigo))
                })

                return Promise.all(yearsMap.flat()) //Retornar todos os anos resolvidos
            })
        }))
}