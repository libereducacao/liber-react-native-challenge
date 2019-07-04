import styled from 'styled-components/native';

export const ContainerCarro = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #FFF;
  border-radius: 10;
  margin-bottom: 20;
  padding: 20px;
`;

export const FotoCarro = styled.View`
  align-items: center;
  padding: 10px;
  flex: 1;
`;

export const InformacoesCarro = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex: 1;
`;

export const MarcaCarro = styled.Text`
  font-size: 12;
  font-family: 'sans-serif';
  font-weight: bold; 
  text-align: left;
  color: #080D2D;
  opacity: 0.3;
`;

export const ModeloCarro = styled.Text`
  font-family: 'sans-serif';
  font-size: 16;
  font-weight: bold;
  text-align: left;
  color: #080D2D;
`;

export const ContainerCambioCarro = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 20;
  margin-bottom: 5;
  background-color: #EBEEFB;
  border-radius: 20;
`;

export const CambioCarro = styled.Text`
  font-family: 'sans-serif';
  font-size: 10;
  font-weight: bold;
  color: #25338D;
`;

export const LabelPrecoCarro = styled.Text`
  font-family: 'sans-serif';
  font-size: 12;
  font-weight: bold;
  text-align: left;
  color: #080D2D;
  opacity: 0.3;
`;

export const PrecoCarro = styled.Text`
  font-family: 'sans-serif';
  font-size: 12;
  font-weight: bold;
  text-align: left;
  color: #475AD1;
`;

export const ContainerMotorCarro = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 120;
  margin-top: 30;
  margin-bottom: 30;
`;

export const MotorCarro = styled.View`
  justify-content: space-around;
  align-items: center;
`;

export const MotorCarroIcone = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #3145C3;
  opacity: 0.04;
  border-radius: 16;
  width: 73;
  height: 73;
  margin-bottom: 10;
`;

export const MotorCarroText = styled.Text`
  font-family: 'sans-serif';
  font-size: 12;
  text-align: left;
  color: #080D2D;
  font-weight: bold;
  opacity: 0.5;
`;
