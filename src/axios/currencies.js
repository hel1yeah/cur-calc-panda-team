import axios from './axios';

const getCurrency = () => {
  return axios.get('/currencies');
};

export { getCurrency };
