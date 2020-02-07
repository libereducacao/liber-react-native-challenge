import api from '../services/api';

export default function getCarPrice(item, cod) {
  const codModel = item.codigo;
  const response = api.get(`/${cod}/modelos/${codModel}/anos`);

  const codYear = response[0].data.codigo;
  const responseValor = api.get(`/${cod}/modelos/${codModel}/anos/${codYear}`);

  return 'ok';
}
