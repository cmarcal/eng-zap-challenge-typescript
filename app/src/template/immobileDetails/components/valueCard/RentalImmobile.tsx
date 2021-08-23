import React from 'react'
import { RentalContainer, ListPayments, ItensPayments } from './styles'

interface Props {
  monthlyCondoFee: string, 
  price: string, 
  yearlyIptu: string, 
  rentalTotalPrice: string
}

export const RentalImmobile = (props: Props) => {
  const { monthlyCondoFee , price, yearlyIptu, rentalTotalPrice} = props;
  const valueImmobile = (valueToFormat: number): string => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL' }).format(valueToFormat as number);
  }
  return (
    <RentalContainer>
      <ListPayments>
        <ItensPayments isBold>Aluguel <span>{valueImmobile(Number(price))}</span></ItensPayments>
        <ItensPayments>Condomínio <span>{valueImmobile(Number(monthlyCondoFee))}</span></ItensPayments>
        <ItensPayments>IPTU por mês <span>{valueImmobile(Number(yearlyIptu) / 12)}</span></ItensPayments>
        <ItensPayments isBold lastElemt>Total: <span>{valueImmobile(Number(rentalTotalPrice) + Number(yearlyIptu) / 12)}</span></ItensPayments>
      </ListPayments>
    </RentalContainer>
  )
}
