import axios from 'axios';

export const httpClient = axios.create({
	headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': '*/*' },
	// baseURL: process.env.NEXT_PUBLIC_API,
	timeout: 10000
});



httpClient.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export default httpClient;
