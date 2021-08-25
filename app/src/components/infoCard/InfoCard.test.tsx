import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { InfoCard, Props } from './InfoCard';
import { queryByTestId, within } from '@testing-library/dom'

const mockInfoCard = {
  'usableAreas': 94,
  'listingType': 'USED',
  'createdAt': '2016-08-22T06:18:14Z',
  'listingStatus': 'ACTIVE',
  'id': '3e1b5315da17',
  'parkingSpaces': 2,
  'updatedAt': '2016-08-22T06:18:14Z',
  'owner': false,
  'images': [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg'
  ],
  'address': {
      'city': 'São Paulo',
      'neighborhood': 'Vila Sonia',
      'geoLocation': {
          'precision': 'ROOFTOP',
          'location': {
              'lon': -46.659002,
              'lat': -23.553518
          }
      }
  },
  'bathrooms': 3,
  'bedrooms': 3,
  'pricingInfos': {
      'yearlyIptu': '230',
      'price': '600000',
      'businessType': 'SALE',
      'monthlyCondoFee': '820'
  }
}
let props: Props
describe('Info card test', () => {
  beforeEach(() => {
    props = {
      companny: 'zap',
      info: mockInfoCard
    }
  })
  const renderComponent = () => render(<InfoCard  {...props}/>);

  it('should component render correcly', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId('InfoCardContainer')).toBeInTheDocument()
  })
  it('should render all quick informations correcly', async () => {
    const { queryByTestId } = renderComponent();

    expect(queryByTestId('usableAreas')).toBeInTheDocument()
    expect(queryByTestId('bathrooms')).toBeInTheDocument()
    expect(queryByTestId('bedrooms')).toBeInTheDocument()
    expect(queryByTestId('parkingSpaces')).toBeInTheDocument()
  })
  it('should not render bathrooms information', async () => {
    props.info.bathrooms = 0;
    const { queryByTestId } = renderComponent();

    expect(queryByTestId('usableAreas')).toBeInTheDocument()
    expect(queryByTestId('bathrooms')).not.toBeInTheDocument()
  })
  it('should not render bedrooms information', async () => {
    props.info.bedrooms = 0;

    const { queryByTestId } = renderComponent();

    expect(queryByTestId('usableAreas')).toBeInTheDocument()
    expect(queryByTestId('bedrooms')).not.toBeInTheDocument()
  })
  it('should not render parkingSpaces information', async () => {
    props.info.parkingSpaces = 0;

    const { queryByTestId } = renderComponent();

    expect(queryByTestId('usableAreas')).toBeInTheDocument()
    expect(queryByTestId('parkingSpaces')).not.toBeInTheDocument()
  })

});