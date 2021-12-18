import axios from './axios';

const getListquotes = () => {
  return axios.request('listquotes');
};

const getExchange = () => {
  return axios.request('exchange');
};

export { getListquotes, getExchange };
