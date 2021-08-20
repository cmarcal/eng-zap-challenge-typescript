import React from 'react'

interface Props {
  id:string;
  bathrooms: number;
  bedrooms: number;
  images: Array<string>;
  businessType: string;
  price: number;
  yearlyIptu: number;
  monthlyCondoFee: number;
}

export const InfoCard = (props: Props) => {
  const {id, bathrooms, bedrooms, images, businessType, price, yearlyIptu, monthlyCondoFee} = props
  return (
    <div>
      
    </div>
  )
}
