import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://api.fastforex.io/',
  headers: { Accept: 'application/json' },
  params: { api_key: process.env.VUE_APP_YOUR_API_KEY },
  // params: { api_key: '16b583c2fb-d75fc809a7-r4berz' },
});

export default requestAxios;
