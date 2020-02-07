import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 40px;
`;

export const Info = styled.View`
  align-items: flex-start;
  width: 78%;
`;

export const TransmissionContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
  padding: 5px 15px;
  background: #ebeefb;
`;

export const Transmission = styled.Text`
  font-weight: bold;
  font-size: 10px;
  color: #25338d;
  padding-left: 3px;
`;

export const Model = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 16px;
  color: #080d2d;
  padding-bottom: 5px;
  max-width: 85%;
`;

export const Mark = styled.Text`
  color: #080d2d;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.3;
`;

export const Price = styled.Text`
  color: #080d2d;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.3;
  padding-top: 10px;
`;

export const ValueContainer = styled.View`
  padding-top: 5px;
  flex-direction: row;
`;

export const TypeCurrency = styled.Text`
  color: #475ad1;
  font-size: 12px;
  font-weight: bold;
`;

export const ValueCurrency = styled.Text`
  color: #475ad1;
  font-size: 20px;
  font-weight: bold;
`;

export const ImageContainer = styled.View`
  padding-left: 20px;
`;

export const Image = styled.Image`
  width: 125.33px;
  height: 91.5px;
`;
