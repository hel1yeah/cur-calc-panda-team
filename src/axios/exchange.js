import axios from './axios';

const getExchange = () => {
  console.log(process.env.YOUR_API_KEY);
  return axios.get('/fetch-all');
};

export { getExchange };
