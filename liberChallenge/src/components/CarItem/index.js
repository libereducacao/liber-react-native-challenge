import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import car from '../../assets/car.png';

import {
  Container,
  Left,
  Info,
  TransmissionContainer,
  Transmission,
  Model,
  Mark,
  Price,
  ValueContainer,
  TypeCurrency,
  ValueCurrency,
  Image,
  ImageContainer,
} from './styles';

export default function ReportItem({ data }) {
  function selectIcon() {
    if (data.transmissao === 'MANUAL') {
      return <Icon name="settings" size={12} color="#25338D" />;
    }
    if (data.transmissao === 'AUTOMÁTICO') {
      return <Icon name="flash-on" size={12} color="#25338D" />;
    }

    return <Icon name="help-outline" size={15} color="#25338D" />;
  }

  return (
    <Container>
      <ImageContainer>
        <Image source={car} />
      </ImageContainer>
      <Left>
        <Info>
          <Mark>{data.marca}</Mark>
          <Model>{data.modelo}</Model>
          <TransmissionContainer>
            {selectIcon()}
            <Transmission>{data.transmissao}</Transmission>
          </TransmissionContainer>
          <Price>PREÇO</Price>
          <ValueContainer>
            <TypeCurrency>R$</TypeCurrency>
            <ValueCurrency>-</ValueCurrency>
          </ValueContainer>
        </Info>
      </Left>
    </Container>
  );
}
