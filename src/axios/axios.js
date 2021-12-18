import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://currency-exchange.p.rapidapi.com/',
  withCredentials: true,
  headers: {
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    'x-rapidapi-key': '5cee8463d4mshcb21f1dbc6afce1p173008jsnd8a1331311fc',
  },
});

export default requestAxios;
