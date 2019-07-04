import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7F9',
    paddingVertical: 30,
    paddingHorizontal: 36,
    flex: 1,
  },
  header: {
    paddingBottom: 30,
  },
  back: {
    justifyContent: 'center',
    height: 50,
    width: 38,
    marginBottom: 14,
  },
  title: {
    color: '#080D2D',
    fontSize: 33,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  content: {
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    // for IOS
    shadowColor: '#003CFF',
    shadowRadius: 20,
    shadowOffset: { width: 9, height: 10 },
    // for Android
    elevation: 25,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    top: -15,
    width: 280,
    height: 170,
    marginBottom: 10,
  },
  modelo: {
    color: 'rgba(8, 13, 45, 0.7)',
    fontSize: 16,
    lineHeight: 20,
    textTransform: 'capitalize',
  },
  precoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  precoPrimary: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 34,
    color: '#080D2D',
  },
  precoSecondary: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
    paddingBottom: 3,
    color: '#080D2D',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  card: {
    height: 70,
    width: 70,
    backgroundColor: '#F6F7F9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  cardName: {
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#080D2D',
  },
  codigo: {
    fontSize: 14,
    lineHeight: 17,
    color: 'rgba(8, 13, 45, 0.7)',
    marginBottom: 11,
  },
});

export default styles;
