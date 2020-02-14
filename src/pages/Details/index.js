import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

import {
  Container,
  MainImage,
  Title,
  Price,
  DescriptionContainer,
  DescriptionCard,
  IconWrapper,
  Legend,
  Value,
  CodigoFipe,
} from './styles';

import carImage from '../../assets/car.png';
import combustivelIcon from '../../assets/starter.png';
import potenciaIcon from '../../assets/power.png';
import cilindradasIcon from '../../assets/gauge.png';

export default function Details({route}) {
  const {car} = route.params;
  return (
    <Container>
      <MainImage source={carImage} />
      <Title>
        {car.marca} - {car.shortModelo} ({car.anoModelo})
      </Title>
      <Price>{car.valor}</Price>
      <DescriptionContainer>
        <DescriptionCard>
          <IconWrapper>
            <Image source={combustivelIcon} />
          </IconWrapper>
          <Legend>Combustível</Legend>
          <Value>{car.combustivel}</Value>
        </DescriptionCard>
        <DescriptionCard>
          <IconWrapper>
            <Image source={potenciaIcon} />
          </IconWrapper>
          <Legend>Potência</Legend>
          <Value>{car.potencia}</Value>
        </DescriptionCard>
        <DescriptionCard>
          <IconWrapper>
            <Image source={cilindradasIcon} />
          </IconWrapper>
          <Legend>Cilindradas</Legend>
          <Value>{car.cilindradas}</Value>
        </DescriptionCard>
      </DescriptionContainer>
      <CodigoFipe>Código Fipe: {car.codigoFipe}</CodigoFipe>
    </Container>
  );
}

Details.propTypes = {
  route: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

Details.defaultProps = {
  route: PropTypes.object,
};
