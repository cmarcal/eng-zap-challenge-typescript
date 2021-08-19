import React from 'react';
import { render } from '@testing-library/react';
import {SubTitle} from '../SubTitle';
import { Props } from '../ITexts';

let props: Props;

describe('Title tests', () => {
  beforeEach( () => {
    props = {
      text: 'Valor inical'
    }
  });

  const renderComponent = () => render(<SubTitle  {...props}/>);

  it('should render component container', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('SubTitleContainer')).toBeInTheDocument();
	});

  it('should render text correctly', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('SubTitleContainer')).toHaveTextContent(props.text);
	});


})