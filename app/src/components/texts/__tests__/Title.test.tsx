import React from 'react';
import { render } from '@testing-library/react';
import {Title} from '../Title';
import { Props } from '../ITexts';

let props: Props;

describe('Title tests', () => {
  beforeEach( () => {
    props = {
      text: 'Valor inical para titulo'
    }
  });

  const renderComponent = () => render(<Title  {...props}/>);

  it('should render component container', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('TitleContainer')).toBeInTheDocument();
	});

  it('should render text correctly', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('TitleContainer')).toHaveTextContent(props.text);
	});


})