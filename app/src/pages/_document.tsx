import Document, { DocumentContext } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheets = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () => {
			return originalRenderPage({
				enhanceApp: (App) => (props) => sheets.collectStyles(<App {...props} />)
			});
		};

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
		};
	}
}
