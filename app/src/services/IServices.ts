export interface ImmobileDTO {
  id: string
  bathrooms: number
  bedrooms: number
  images: Array<string>;
  createdAt: string
  updatedAt: string;
  pricingInfos:PricingInfos;
  parkingSpaces: number
  usableAreas: number;
  address: Address
  listingStatus: string
  listingType: string
  owner: boolean
}

export type Address = {
  city: string;
  geoLocation: {
    location: {lon: number, lat: number}
    precision: string
  }
  neighborhood: string;
}

export type PricingInfos = {
  businessType:string;
  monthlyCondoFee:string;
  price:string;
  yearlyIptu:string;
  rentalTotalPrice?: string;
}

