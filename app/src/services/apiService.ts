import { AxiosPromise } from 'axios';

import httpClient from './httpClient';

export const get = (url: string): AxiosPromise => httpClient.get(url);