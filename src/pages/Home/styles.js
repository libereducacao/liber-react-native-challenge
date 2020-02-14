import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const CarsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 1,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const CarCard = styled(RectButton)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const Content = styled.Text`
  text-transform: uppercase;
  color: rgba(8, 13, 45, 0.3);
  font-size: 12px;
  font-weight: bold;
`;

export const DarkerContent = styled.Text`
  color: #080d2d;
  font-size: 16px;
  font-weight: bold;
`;

export const CarChangeContainer = styled.Text`
  background-color: #ebeefb;
  color: #25338d;
  width: 120px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HighlightContent = styled.Text`
  color: #475ad1;
  font-size: 20px;
  font-weight: bold;
`;
