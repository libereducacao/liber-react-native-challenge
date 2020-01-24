import Axios from 'axios';

const baseURL = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

function getCarTypes() {
  return (
    Axios.get(baseURL)
      // Fetch data and select random brand
      .then(res => {
        const carBrands = res.data;
        const randomNum = Math.floor(Math.random() * (carBrands.length - 1));
        console.log('Pabblo');
        return carBrands[randomNum].codigo;
      })
      // Get all car types from selected brand
      .then(async brandNum => {
        const URL = `${baseURL}/${brandNum}/modelos`;

        const { data } = await Axios.get(URL);

        // Normally, extracting 'data' from the response would be enough. However, due to a bug, this API is returning both 'modelos' and 'anos', whereas the latter should not be there.
        const { modelos } = data;

        const carsCodes = {
          URL,
          codesArray: modelos.map(modelo => modelo.codigo)
        };
        console.log('Anitta');
        return carsCodes;
      })
      // Create array with each car type URL in order to get available years for them
      .then(carsCodes => {
        const { URL, codesArray } = carsCodes;

        const urlsArray = new Array();

        codesArray.forEach(code => {
          urlsArray.push(`${URL}/${code}/anos`);
        });
        console.log('Iza');
        return urlsArray;
      })
      // Get available years
      .then(async urlsArray => {
        const promises = urlsArray.map(url => Axios.get(url));

        const availableYears = await Promise.all(promises);
        console.log('Katty');
        return availableYears;
      })
      // Organize array
      .then(availableYears => {
        let organizedData = new Array();

        availableYears.forEach(year => {
          let obj = {};

          obj.url = year.config.url;
          obj.codes = year.data.map(codeInfo => codeInfo.codigo);

          organizedData.push(obj);
        });
        console.log('Emicida');
        return organizedData;
      })
      // Create array with all URLs
      .then(organizedData => {
        let urls = [];

        for (let i = 0; i < organizedData.length; i++) {
          for (let j = 0; j < organizedData[i].codes.length; j++) {
            urls.push(`${organizedData[i].url}/${organizedData[i].codes[j]}`);
          }
        }
        console.log('Tupac');
        return urls;
      })
      // Fetch data from each URL
      .then(async urls => {
        const promises = urls.map(url => Axios.get(url));

        const [...resps] = await Promise.all(promises);
        console.log('Seu Jorge');
        return resps;
      })
      // Sanitize info and return it
      .then(resps => {
        const carInfo = [];

        resps.forEach(car => carInfo.push(car.data));
        console.log('Tom');
        console.log(carInfo);
        return carInfo;
      })
      .catch(err => {
        throw err;
      })
  );
}

export { getCarTypes };
