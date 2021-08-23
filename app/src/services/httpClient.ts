import axios from 'axios';

export const httpClient = axios.create({
	headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*', 'Accept': '*/*', 'Access-Control-Allow-Credentials': true },
	baseURL: process.env.NEXT_PUBLIC_API,
	timeout: 10000
});



httpClient.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export default httpClient;
