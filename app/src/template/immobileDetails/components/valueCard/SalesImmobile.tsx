import React from 'react'
import { HeaderSalesContainer, ItensPayments, ListPayments, SalesContainer, ValueHeaderSalesContainer } from './styles'

interface Props {
  monthlyCondoFee: string, 
  price: string, 
  yearlyIptu: string, 
}

export const SalesImmobile = (props: Props) => {
  const { monthlyCondoFee , price, yearlyIptu} = props;
  const valueImmobile = (valueToFormat: number): string => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL' }).format(valueToFormat as number);
  }
  return (
    <SalesContainer>
      <HeaderSalesContainer>
        Valor do imóvel
        <ValueHeaderSalesContainer>{valueImmobile(Number(price))}</ValueHeaderSalesContainer>

      </HeaderSalesContainer>
      <ListPayments>
        <ItensPayments>Valor de entrada <span>{valueImmobile(Number(price) * 0.20)}</span></ItensPayments>
        <ItensPayments>Condomínio <span>{valueImmobile(Number(monthlyCondoFee))}</span></ItensPayments>
        <ItensPayments>IPTU por mês <span>{valueImmobile(Number(yearlyIptu) / 12)}</span></ItensPayments>
      </ListPayments>
    </SalesContainer>
  )
}
