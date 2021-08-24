import { AxiosResponse } from 'axios';
import { get } from './apiService';
import axios from 'axios';
const config: any = {
  method: 'get',
  url: 'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json',
  headers: { }
};

export const getImmobileList = async (): Promise<AxiosResponse> => await axios(config)
// export const getImmobileList = async(): Promise<AxiosResponse> => await get('/sources/source-1.json')