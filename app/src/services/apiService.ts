import { AxiosPromise } from 'axios';

import {Api} from './httpClient';

export const get = (url: string): AxiosPromise => Api.get(url);