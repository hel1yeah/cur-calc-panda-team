import axios from './axios';

const getConvert = (option) => {
  return axios.get(
    `convert?from=${option.from}&to=${option.to}&amount=${option.amount}`
  );
};

// https://api.fastforex.io/convert?from=UAH&toUSD&amount=123&api_key=16b583c2fb-d75fc809a7-r4berz

// 'https://api.fastforex.io/convert?from=UAH&to=SSD&amount=123&api_key=16b583c2fb-d75fc809a7-r4berz'

export { getConvert };
