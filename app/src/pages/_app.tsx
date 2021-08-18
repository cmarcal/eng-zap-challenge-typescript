import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>OLX Brasil</title>
				<meta name='description' content='Aluguel e compras de imóveis | OLX Brasil | Zap | Viva Real' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
