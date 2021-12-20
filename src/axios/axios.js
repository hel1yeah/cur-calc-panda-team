import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://api.fastforex.io/',
  headers: { Accept: 'application/json' },
  params: { api_key: process.env.VUE_APP_YOUR_API_KEY },
});

export default requestAxios;
