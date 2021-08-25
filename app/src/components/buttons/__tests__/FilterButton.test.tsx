import React from 'react';
import {  render } from '@testing-library/react';
import { FiltersImmobileButton, Props } from '../filtersImmobile/FiltersImmobileButton';
import userEvent from '@testing-library/user-event';

describe('FilterButton Test', () => {
	let props: Props;

	beforeEach(() => {
		props = {
      path: 'zap',
      activeFilter: 'ALL',
			handleClick: jest.fn((immobileType) => immobileType)
		};
	});
	const renderComponent = () => render(<FiltersImmobileButton {...props} />);

	it('should render component container', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('FilterButtonContainer')).toBeInTheDocument();
	});

	it('should all buttons render', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('FilterButtonContainer')).toHaveTextContent('Aluguel');
		expect(getByTestId('FilterButtonContainer')).toHaveTextContent('Compra');
		expect(getByTestId('FilterButtonContainer')).toHaveTextContent('Todos');
	});
	it('should Aluguel button is active', () => {
		const mockClick = jest.fn(()=> 'aluguel');
		props.handleClick = mockClick;
		const {  getByText } = renderComponent();

		const Aluguelbutton = getByText('Aluguel');


		userEvent.click(Aluguelbutton);
		expect(mockClick).toHaveBeenCalledTimes(1);
	});
	it('should Compra button is active', () => {
		const mockClick = jest.fn(()=> 'aluguel');
		props.handleClick = mockClick;
		const {  getByText } = renderComponent();

		const Compralbutton = getByText('Compra');

		userEvent.click(Compralbutton);

		expect(mockClick).toHaveBeenCalledTimes(1);
	});
	it('should Todos button is active', () => {
		const mockClick = jest.fn(()=> 'aluguel');
		props.handleClick = mockClick;
		const {  getByText } = renderComponent();

		const Todoslbutton = getByText('Todos');

		userEvent.click(Todoslbutton);

		expect(mockClick).toHaveBeenCalledTimes(1);
	});
});
