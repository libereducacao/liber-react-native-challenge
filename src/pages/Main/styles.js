import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7F9',
    flex: 1,
    paddingTop: 34,
  },
  header: {
    paddingHorizontal: 36,
    paddingBottom: 29,
  },
  title: {
    color: '#080D2D',
    fontSize: 33,
    fontWeight: 'bold',
    paddingBottom: 31,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 21,
    borderRadius: 13,
  },
  input: {
    paddingTop: 22,
    paddingBottom: 17,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    height: 55,
    flex: 1,
  },
  carList: {
    paddingHorizontal: 36,
  },
  message: {
    fontSize: 16,
    color: '#080D2D',
  },
});

export default styles;
