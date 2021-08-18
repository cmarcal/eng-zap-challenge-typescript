import React from 'react';
import { render } from '@testing-library/react';
import { Button, Props } from '../Button';

describe('Button Test', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			text: 'click here'
		};
	});
	const renderComponent = () => render(<Button {...props} />);

	it('should render component container', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('ButtonContianer')).toBeInTheDocument();
	});

	it('should text render component', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('ButtonContianer')).toHaveTextContent(props.text);
	});
});
