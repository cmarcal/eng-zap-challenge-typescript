
export const mockImmobileList = [
  {
    'usableAreas': 319,
    'listingType': 'USED',
    'createdAt': '2017-07-26T17:39:33Z',
    'listingStatus': 'ACTIVE',
    'id': '87a5fc39dd98',
    'parkingSpaces': 5,
    'updatedAt': '2017-07-26T17:39:33Z',
    'owner': false,
    'images': [
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
        'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg'
    ],
    'address': {
        'city': 'São Paulo',
        'neighborhood': 'Cidade Monções',
        'geoLocation': {
            'precision': 'GEOMETRIC_CENTER',
            'location': {
                'lon': -46.659002,
                'lat': -23.553518
            }
        }
    },
    'bathrooms': 4,
    'bedrooms': 0,
    'pricingInfos': {
        'period': 'MONTHLY',
        'yearlyIptu': '2403',
        'price': '14000',
        'rentalTotalPrice': '19758',
        'businessType': 'RENTAL',
        'monthlyCondoFee': '5758'
    }
},
{
  'usableAreas': 118,
  'listingType': 'USED',
  'createdAt': '2018-03-21T20:00:58.940Z',
  'listingStatus': 'ACTIVE',
  'id': '9a84086b655d',
  'parkingSpaces': 2,
  'updatedAt': '2018-03-21T20:00:58.940Z',
  'owner': false,
  'images': [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg'
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
      'yearlyIptu': '285',
      'price': '790000',
      'businessType': 'SALE',
      'monthlyCondoFee': '720'
  }
}
]


export const getImmobileListlRequest = (): any => {
	return Promise.resolve({
        data: mockImmobileList
  });
};