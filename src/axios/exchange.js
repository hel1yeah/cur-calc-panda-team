import axios from './axios';
let dateCurrencies = '15.12.2021';

const getExchange = () => {
  return axios.get(dateCurrencies);
};

export default {
  getExchange,
};
