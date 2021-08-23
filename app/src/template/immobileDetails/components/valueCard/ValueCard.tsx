import React from 'react'
import { PricingInfos } from '../../../../services/IServices'
import { RentalImmobile } from './RentalImmobile';
import { SalesImmobile } from './SalesImmobile';
import { CardContainer } from './styles'

interface Props {
  pricingInfos: PricingInfos
}

export const ValueCard = ({pricingInfos}: Props) => {

  const {businessType, monthlyCondoFee , price, yearlyIptu, rentalTotalPrice} = pricingInfos;

  
  return (
    <CardContainer>
      {businessType === 'SALE' && <SalesImmobile 
        monthlyCondoFee={monthlyCondoFee} 
        price={price} 
        yearlyIptu={yearlyIptu} />}

      {businessType === 'RENTAL' && 
        <RentalImmobile
          monthlyCondoFee={monthlyCondoFee} 
          price={price} 
          yearlyIptu={yearlyIptu} 
          rentalTotalPrice={rentalTotalPrice as string}/>}
    </CardContainer>
  )
}
