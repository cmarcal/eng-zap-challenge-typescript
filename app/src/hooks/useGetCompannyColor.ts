import React, { ReactElement } from 'react'
import { colors } from 'src/assets/colorsToken';

interface ReturnHooks {
  colorCompanny(companny: string): string
  colorTextByCompanny(companny: string): string
}

export const useGetCompannyColor = (): ReturnHooks =>  {

  const colorCompanny = (companny: string): string => {
    switch (companny) {
      case 'zap':
        return colors.orangeZap;
      case 'vivareal':    
        return colors.blueVivalReal;
      case 'groupZap':
        return colors.greenGroupZap  
      default:
        return '';
    }
  }
  const colorTextByCompanny = (companny: string): string => {
    switch (companny) {
      case 'zap':
        return colors.orangeZap;
      case 'vivareal':    
        return colors.blueVivalReal;
      default:
        return '#333';
    }
  }
  return {colorCompanny, colorTextByCompanny}
}
