import { AxiosResponse } from 'axios';
import { get } from './apiService';

export const getImmobileList = async(): Promise<AxiosResponse> => await get('/sources/source-1.json')