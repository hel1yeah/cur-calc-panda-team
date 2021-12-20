import axios from './axios';

const getExchange = (currency) => {
  console.log(currency);
  return axios.get(`/fetch-all?from=${currency}`);
};

export { getExchange };
