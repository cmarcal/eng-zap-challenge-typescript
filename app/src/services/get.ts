import { AxiosResponse } from 'axios';
import { get } from './apiService';

export const getImmobileList = async(): Promise<AxiosResponse> => get(process.env.NEXT_PUBLIC_API as string)