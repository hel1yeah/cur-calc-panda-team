import axios from './axios';

const getListquotes = () => {
  return axios.get('/listquotes');
};

export { getListquotes };
