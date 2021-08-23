import { AxiosResponse } from 'axios';
import { get } from './apiService';

export const getImmobileList = async(): Promise<AxiosResponse> => get('sources/source-1.json')