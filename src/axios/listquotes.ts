import axios from './axios';
import { AxiosResponse } from 'axios';

const getListquotes = (): Promise<AxiosResponse<any, any>> => {
  return axios.get('/listquotes');
};

export { getListquotes };
