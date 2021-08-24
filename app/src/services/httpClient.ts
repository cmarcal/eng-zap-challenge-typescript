import axios from 'axios';

export const Api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': true,
		'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Accept: '*/*',
  },
	withCredentials: false,
  baseURL: process.env.NEXT_PUBLIC_API,
});

Api.interceptors.request.use((config) => {
  return config;
});