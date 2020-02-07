import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f7f9;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 80.5%;
  height: 70%;
  margin: 30px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 40%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Info = styled.Text`
  color: #080d2d;
  font-size: 18px;
  opacity: 0.7;
  align-self: flex-start;
`;

export const ValueContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding: 10px 0 15px;
`;

export const TypeCurrency = styled.Text`
  color: #080d2d;
  font-size: 14px;
  font-weight: bold;
`;

export const ValueCurrency = styled.Text`
  color: #080d2d;
  font-size: 26px;
  font-weight: bold;
`;

export const MoreInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: #080d2d;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.5;
`;

export const CodFipe = styled.Text`
  color: #080d2d;
  font-size: 14px;
  opacity: 0.7;
  align-self: flex-start;
`;

export const YearPicker = styled.Picker`
  height: 50px;
  width: 120px;
  border-width: 1px;
  justify-content: center;
`;

export const PickerContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding-right: 10px;
`;
