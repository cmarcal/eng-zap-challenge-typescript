import axios from 'axios';

export const Api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
		mode:'no-cors'
  },
  baseURL: process.env.NEXT_PUBLIC_API,
});

Api.interceptors.request.use((config) => {
  return config;
});