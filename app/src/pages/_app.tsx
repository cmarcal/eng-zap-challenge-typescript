import React , {useReducer} from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Body } from '../components/body/styles';
import { Header } from '../components/header';
import { ImmobileContext } from '../store/immobile/ImmobileContext';
import immobileContextReducer from '../store/immobile/ImmobileContextReducer';
import {initialImmobileContext} from '../store/immobile/InitialImmobileContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const [immobileContextState, immobileContextDispatch] = useReducer(immobileContextReducer, initialImmobileContext);

	const immobileContext = {immobileContextState, immobileContextDispatch}
	return (
		<>
			<Head>
				<title>OLX Brasil</title>
				<meta name='description' content='Aluguel e compras de imóveis | OLX Brasil | Zap | Viva Real' />
				<meta httpEquiv="Content-Security-Policy" />
			</Head>
			<Body>
				<Header />
				<ImmobileContext.Provider value={immobileContext}>
					<Component {...pageProps} />
				</ImmobileContext.Provider>
			</Body>
		</>
	);
}
export default MyApp;
