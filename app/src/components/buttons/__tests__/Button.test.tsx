import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

describe('Button Test', () => {
	beforeEach(() => {
		renderComponent();
	});

	it('should render component container', () => {
		expect(screen.getByTestId('SidebarContainer')).toBeInTheDocument();
	});
});
