import React from 'react';
import { render } from '@testing-library/react';
import { Button, Props } from '../Button';
import userEvent from '@testing-library/user-event';

describe('Button Test', () => {
	let props: Props;

	beforeEach(() => {
		props = {
			text: 'click here',
			onClick: jest.fn(() => null)
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
	it('should click its called', () => {
		const mockClick = jest.fn();
		props.onClick = mockClick;
		const { getByTestId } = renderComponent();
		const button = getByTestId('ButtonContianer');

		userEvent.click(button);

		expect(mockClick).toHaveBeenCalledTimes(1);
	});
});
