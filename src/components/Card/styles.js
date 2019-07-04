import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 13,
    paddingVertical: 22,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    height: 160,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 90,
    marginRight: 20,
  },
  infoContainer: {
    flex: 1,
  },
  subTitle: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    color: 'rgba(8, 13, 45, 0.3)',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
    color: '#080D2D',
    marginBottom: 4,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    borderRadius: 24,
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#EBEEFB',
  },
  cambio: {
    marginLeft: 5.5,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#25338D',
  },
  precoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  precoPrimary: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#475AD1',
  },
  precoSecondary: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14,
    paddingBottom: 3,
    color: '#475AD1',
  },
});

export default styles;
