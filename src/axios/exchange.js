import axios from './axios';

const getExchange = (currency) => {
  return axios.get(`/fetch-all?from=${currency}`);
};

export { getExchange };
