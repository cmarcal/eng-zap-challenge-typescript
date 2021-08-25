import React from 'react';
import {  render, screen } from '@testing-library/react';
import { Carousel, Props } from './Carousel'
const mockImages = ['http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
                    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
                    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
                    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
                    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
                    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg']
 
describe('Carousel Test', () => {
	let props: Props;

	beforeEach(() => {
		props = {
      images: [],
      sizeImages: {width: 5, height: 2}
		};
	});

	const renderComponent = () => render(<Carousel {...props} />); 

  it('should render component container', () => {
		const { getByTestId } = renderComponent();

		expect(getByTestId('CarouselContainer')).toBeInTheDocument();
	});

  it('should render all images', () => {
    props.images = mockImages;
		const { queryAllByAltText } = renderComponent();

		expect(queryAllByAltText('image0')[0]).toBeInTheDocument();
		expect(queryAllByAltText('image1')[0]).toBeInTheDocument();
		expect(queryAllByAltText('image2')[0]).toBeInTheDocument();
		expect(queryAllByAltText('image3')[0]).toBeInTheDocument();
		expect(queryAllByAltText('image4')[0]).toBeInTheDocument();
		expect(queryAllByAltText('image5')[0]).toBeInTheDocument();
	});

});