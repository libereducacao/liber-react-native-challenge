import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  padding: 30px;
  flex: 1;
  background-color: #F6F7F9;
`;

export const Titulo = styled.Text`
  font-size: 30;
  text-align: left;
  color: #080D2D;
  margin-bottom: 20;
  font-weight: bold;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20;
  background: #FFF;
  border-radius: 10;
`;

export const Input = styled.TextInput`
  font-family: 'sans-serif';
  font-size: 16;
  text-align: left;
  color: #080D2D;
  font-weight: bold;
`;