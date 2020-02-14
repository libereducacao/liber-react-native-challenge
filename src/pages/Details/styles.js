import styled from 'styled-components/native';

export const Container = styled.View`
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  width: 300px;
  height: 462px;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

export const MainImage = styled.Image`
  width: 250px;
  height: 185px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: rgba(8, 13, 45, 0.7);
  text-align: left;
`;

export const Price = styled.Text`
  font-size: 26px;
  color: #080d2d;
  font-weight: bold;
  text-align: left;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const DescriptionCard = styled.View`
  width: 73px;
  margin: 20px;
`;

export const IconWrapper = styled.View`
  width: 73px;
  height: 73px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(8, 13, 45, 0.04);
`;

export const Legend = styled.Text`
  width: 100%;
  font-size: 10px;
  color: rgba(8, 13, 45, 0.5);
  text-transform: uppercase;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 14px;
  color: #080d2d;
  font-weight: bold;
`;

export const CodigoFipe = styled.Text`
  font-size: 14px;
  color: rgba(8, 13, 45, 0.7);
  text-align: left;
  width: 100%;
`;
