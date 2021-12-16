import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://api.privatbank.ua/p24api/exchange_rates?json&date=',
});

export default requestAxios;
