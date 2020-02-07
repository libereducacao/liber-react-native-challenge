import React from 'react';

import {
  MoreInfoContainer,
  LogoContainer,
  ImageLogo,
  Label,
  Value,
} from './styles';

import bomb from '../../assets/bomb.png';
import gauge from '../../assets/gauge.png';
import starter from '../../assets/starter.png';

export default function CardDetailInfo({ value, label, image }) {
  function selectImage() {
    switch (image) {
      case 'bomb':
        return bomb;
        break; // eslint-disable-line
      case 'gauge':
        return gauge;
        break; // eslint-disable-line
      default:
        return starter;
        break; // eslint-disable-line
    }
  }

  return (
    <MoreInfoContainer>
      <LogoContainer>
        <ImageLogo source={selectImage()} />
      </LogoContainer>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </MoreInfoContainer>
  );
}
