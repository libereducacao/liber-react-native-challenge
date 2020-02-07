export default function utilArray(stringArray, type) {
  switch (type) {
    case 'model':
      return `${stringArray.split(' ')[0]} ${stringArray.split(' ')[1]}`;
      break; // eslint-disable-line
    case 'transmission':
      if (stringArray.indexOf('Aut') !== -1) {
        return 'AUTOMÁTICO';
      }
      if (stringArray.indexOf('Mec') !== -1) {
        return 'MANUAL';
      }
      return '';

      break; // eslint-disable-line
    case 'year':
      return stringArray.split('-')[0];
      break; // eslint-disable-line
    case 'value':
      return stringArray.split(' ')[1];
      break; // eslint-disable-line
    default:
      return stringArray.split(' ');
      break; // eslint-disable-line
  }
}
