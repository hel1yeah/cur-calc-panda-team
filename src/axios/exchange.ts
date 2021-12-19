import axios from './axios';
import { AxiosResponse } from 'axios';

const getExchange = (currency: string): Promise<AxiosResponse<any, any>> => {
  return axios.get(`/fetch-all?from=${currency}`);
};

export { getExchange };
