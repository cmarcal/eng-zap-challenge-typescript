import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { Header } from 'src/components/header';
import { Body } from 'src/components/body/styles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>OLX Brasil</title>
				<meta name='description' content='Aluguel e compras de imóveis | OLX Brasil | Zap | Viva Real' />
			</Head>
			<Header />
			<Body>
				<Component {...pageProps} />
			</Body>
		</>
	);
}
export default MyApp;
