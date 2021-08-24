import axios from 'axios';

export const Api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
  },
  baseURL: process.env.NEXT_PUBLIC_API,
});

Api.interceptors.request.use((config) => {
  return config;
});