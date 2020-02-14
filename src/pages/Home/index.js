import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  CarsList,
  CarCard,
  InfoContainer,
  Content,
  DarkerContent,
  CarChangeContainer,
  HighlightContent,
} from './styles';

import carImage from '../../assets/car.png';
import manualIcon from '../../assets/settings.png';
import automaticIcon from '../../assets/lighting-button.png';

export default function Home({navigation}) {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCodes() {
      const codeMarcas = [];
      const {data: marcas} = await api.get('carros/marcas');
      marcas.map(item => codeMarcas.push(item.codigo));

      const codeModelos = [];
      const indexMarcas = Math.floor(
        Math.random() * (codeMarcas.length - 0) + 0
      );
      const {data: models} = await api.get(
        `carros/marcas/${codeMarcas[indexMarcas]}/modelos`
      );
      models.modelos.map(item => codeModelos.push(item.codigo));

      const arrayYears = [];
      const indexModels = Math.floor(
        Math.random() * (codeModelos.length - 0) + 0
      );
      const {data: dataYears} = await api.get(
        `carros/marcas/${codeMarcas[indexMarcas]}/modelos/${codeModelos[indexModels]}/anos`
      );
      dataYears.map(item => arrayYears.push(item.codigo));

      const arrayCars = [];
      await Promise.all(
        arrayYears.map(async year => {
          const {data} = await api.get(
            `carros/marcas/${codeMarcas[indexMarcas]}/modelos/${codeModelos[indexModels]}/anos/${year}`
          );

          const {
            Marca,
            Modelo,
            AnoModelo,
            Valor,
            Combustivel,
            CodigoFipe,
          } = data;

          arrayCars.push({
            marca: Marca,
            shortModelo: Modelo.split(/[0-9][.][0-9]/g)[0],
            anoModelo: AnoModelo,
            cambioManual: Modelo.match('Man') !== null ? 'Manual' : false,
            cambioAutomatico:
              Modelo.match('Aut') !== null ? 'Automático' : false,
            combustivel: Combustivel,
            valor: Valor,
            potencia:
              Modelo.match(/[0-9][.][0-9]/g) !== null
                ? Modelo.match(/[0-9][.][0-9]/g)[0]
                : false,
            cilindradas:
              Modelo.match(/[0-9][0-9][V]/g) !== null
                ? Modelo.match(/[0-9][0-9][V]/g)[0]
                : false,
            codigoFipe: CodigoFipe,
          });
        })
      );
      setCars(arrayCars);
      setLoading(false);
    }
    getCodes();
  }, []);

  return (
    <Container>
      {loading || cars.length < 1 ? (
        <>
          <ActivityIndicator color="#475AD1" />
        </>
      ) : (
        <>
          <CarsList
            data={cars}
            renderItem={({item: car}) => (
              <CarCard onPress={() => navigation.navigate('Details', {car})}>
                <Image source={carImage} />
                <InfoContainer>
                  <Content>{car.marca}</Content>
                  <DarkerContent>{car.shortModelo}</DarkerContent>

                  {car.cambioManual && (
                    <CarChangeContainer>
                      <Image source={manualIcon} />
                      {car.cambioManual}
                    </CarChangeContainer>
                  )}
                  {car.cambioAutomatico && (
                    <CarChangeContainer>
                      <Image source={automaticIcon} />
                      {car.cambioAutomatico}
                    </CarChangeContainer>
                  )}
                  <Content>Preço</Content>
                  <HighlightContent>{car.valor}</HighlightContent>
                </InfoContainer>
              </CarCard>
            )}
            keyExtractor={(car, index) => String(index)}
          />
        </>
      )}
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Home.defaultProps = {
  navigation: PropTypes.object,
};
