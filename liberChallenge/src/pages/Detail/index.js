import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';
import car from '../../assets/car.png';

import utilArray from '../../utils/utilArray';
import CardDetailInfo from '../../components/CardDetailInfo';

import {
  Container,
  Card,
  ImageContainer,
  Image,
  Info,
  ValueContainer,
  TypeCurrency,
  ValueCurrency,
  MoreInfo,
  Label,
  InfoContainer,
  CodFipe,
  YearPicker,
  PickerContainer,
} from './styles';

export default function Detail({ navigation }) {
  const [detailCar, setDetailCar] = useState({});
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState('');
  const [arrayYears, setArrayYears] = useState([]);

  const carItem = navigation.getParam('item');
  const codMark = navigation.getParam('codMark');

  const codModel = carItem.codigo;

  useEffect(() => {
    async function loadCar() {
      setLoading(true);
      const response = await api.get(`/${codMark}/modelos/${codModel}/anos`);

      const years = response.data;
      years.forEach(item => {
        item.ano = utilArray(item.codigo, 'year');
      });
      setArrayYears(years);

      const codYear = year || years[0].codigo;

      const responseDetail = await api.get(
        `/${codMark}/modelos/${codModel}/anos/${codYear}`
      );

      const detail = responseDetail.data;
      detail.Valor = utilArray(detail.Valor, 'value');
      setDetailCar(detail);
      setLoading(false);
    }

    loadCar();
  }, [year]); // eslint-disable-line

  const { Combustivel, Valor, CodigoFipe } = detailCar;

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Card>
          <PickerContainer>
            <Label>Ano: </Label>
            <YearPicker
              mode="dialog"
              selectedValue={year}
              onValueChange={itemValue => setYear(itemValue)}
            >
              {arrayYears.map(item => (
                <YearPicker.Item
                  key={item.codigo}
                  label={item.ano}
                  value={item.codigo}
                />
              ))}
            </YearPicker>
          </PickerContainer>
          <ImageContainer>
            <Image source={car} />
          </ImageContainer>
          <InfoContainer>
            <Info>{`${carItem.marca} - ${carItem.modelo} (${detailCar.AnoModelo})`}</Info>
            <ValueContainer>
              <TypeCurrency>R$</TypeCurrency>
              <ValueCurrency>{Valor}</ValueCurrency>
            </ValueContainer>
            <MoreInfo>
              <CardDetailInfo
                value={Combustivel}
                label="COMBUSTÍVEL"
                image="starter"
              />
              <CardDetailInfo
                value="Indisponível"
                label="POTÊNCIA"
                image="bomb"
              />
              {/* Não identifiquei valor retornado da API que correspondesse a tal campo, por isso é passado o valor "Indisponível" */}
              <CardDetailInfo
                value="Indisponível"
                label="CILINDRADAS"
                image="gauge"
              />
              {/* Não identifiquei valor retornado da API que correspondesse a tal campo, por isso é passado o valor "Indisponível" */}
            </MoreInfo>
          </InfoContainer>
          <CodFipe>Código FIPE: {CodigoFipe}</CodFipe>
        </Card>
      )}
    </Container>
  );
}
