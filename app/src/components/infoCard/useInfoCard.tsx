import React from 'react'
import { useGetCompannyColor } from '../../hooks/useGetCompannyColor';
import { colors } from '../../assets/colorsToken';

interface ReturnHooks {
  typeAnnouncement(businessType: string): string;
  colorTextByCompanny(companny: string): string;
  valueImmobile(valueToFormat: number): string;
}

export const useInfoCard = (): ReturnHooks => {

  const {colorTextByCompanny} = useGetCompannyColor();

  const typeAnnouncement = (businessType: string): string => {
    switch (businessType) {
      case 'SALE':
        return 'Imóvel para venda';

      case 'RENTAL':
        return 'Imóvel para aluguel';
    
      default:
        return '';
    }
  }

  const colorText = (companny: string): string => {
    switch (companny) {
      case 'zap':
        return colors.orangeZap;
      case 'vivareal':    
        return colors.blueVivalReal;
      default:
        return '#333';
    }
  }

  const valueImmobile = (valueToFormat: number): string => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL' }).format(valueToFormat as number);
  
  }

  return{typeAnnouncement, colorTextByCompanny, valueImmobile}
}
