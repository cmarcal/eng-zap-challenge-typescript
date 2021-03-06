import React from 'react';
import {  render } from '@testing-library/react';
import { Header } from '../Header';
import { within} from '@testing-library/dom'


const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Header test', () => {
  const renderComponent = () => render(<Header  />);

  it('should render component container', () => {
    useRouter.mockImplementationOnce(() => ({ route: '/', query: '', push: jest.fn() }))
		const { getByTestId } = renderComponent();

		expect(getByTestId('HeaderContainer')).toBeInTheDocument();
	});

  it('should render only GroupZap logo', () => {
    useRouter.mockImplementationOnce(() => ({ route: '/', query: '', push: jest.fn() }))
		const { getByTestId } = renderComponent();
    const container = getByTestId('HeaderContainer')
    
		expect(within(container).queryByTestId('ZapImage')).not.toBeInTheDocument();
		expect(within(container).queryByTestId('VivaRealImage')).not.toBeInTheDocument();
		expect(within(container).queryByTestId('GroupZapImage')).toBeInTheDocument();
	});

  it('should render only Zap logo', async () => {
    useRouter.mockImplementationOnce(() => ({ route: '/zap' , query: {company: 'zap'}, push: jest.fn()}))
		const { getByTestId } = renderComponent();
    const container = getByTestId('HeaderContainer')

		expect(within(container).queryByTestId('ZapImage')).toBeInTheDocument();
		expect(within(container).queryByTestId('VivaRealImage')).not.toBeInTheDocument();
		expect(within(container).queryByTestId('GroupZapImage')).not.toBeInTheDocument();
	});

  it('should render only Viva Real logo', async () => {
    useRouter.mockImplementationOnce(() => ({ route: '/vivaReal' , query: {company: 'vivareal'}, push: jest.fn()}))
		const { getByTestId } = renderComponent();
    const container = getByTestId('HeaderContainer')
		expect(within(container).queryByTestId('ZapImage')).not.toBeInTheDocument();
		expect(within(container).queryByTestId('VivaRealImage')).toBeInTheDocument();
		expect(within(container).queryByTestId('GroupZapImage')).not.toBeInTheDocument();
	});
})