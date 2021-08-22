export interface ImmobileDTO {
  address: Address
  bathrooms: number
  bedrooms: number
  createdAt: string
  id: string
  images: Array<string>;
  listingStatus: string
  listingType: string
  owner: boolean
  parkingSpaces: number
  pricingInfos:PricingInfos;
  updatedAt: string;
  usableAreas: number;

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

export interface BasicImmobileList {
  id: string;
  bathrooms: number
  bedrooms: number
  images: Array<string>;
  pricingInfos:PricingInfos;
  parkingSpaces:number;
  usableAreas: number;
}