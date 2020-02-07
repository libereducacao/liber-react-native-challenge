import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f6f7f9;
  padding-top: 15%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
`;

export const SearchContainer = styled.View`
  height: 55px;
  background: #fff;
  border-radius: 20px;
  margin: 30px 30px 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.TouchableOpacity`
  align-self: center;
  padding: 0 10px 0 0;
`;

export const Search = styled.TextInput`
  flex: 1;
  font-size: 18px;
  border-radius: 20px;
  background: #fff;
  color: #080d2d;
  padding: 10px 0 10px 15px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
