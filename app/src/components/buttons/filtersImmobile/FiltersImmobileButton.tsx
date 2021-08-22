import React, { ReactElement } from 'react'
import { colors } from '../../../assets/colorsToken'
import { FilterImmobile, ValidUrls } from '../../../hooks/useImmobileList'
import { GroupButtonContianer , Buttons} from './styles'

interface Props {
  path: ValidUrls;
  activeFilter: FilterImmobile;
  handleClick:(immobileType: FilterImmobile)=> void;
}

export const FiltersImmobileButton = ({handleClick, path, activeFilter}: Props): ReactElement => {
  const handleButtonColor = () => {
    switch (path) {
      case 'zap':
        return colors.orangeZap
      case 'vivareal':
        return colors.blueVivalReal
      default:
        return colors.greenGroupZap;
    }
  }
  return (
    <GroupButtonContianer>
      <Buttons isActive={activeFilter === 'RENTAL'} color={handleButtonColor()} onClick={()=> handleClick('RENTAL')}>Aluguel</Buttons>
      <Buttons isActive={activeFilter === 'SALE'}  color={handleButtonColor()} onClick={()=> handleClick('SALE')}>Compra</Buttons>
      <Buttons isActive={activeFilter === 'ALL'}  color={handleButtonColor()} onClick={()=> handleClick('ALL')}>Todos</Buttons>
    </GroupButtonContianer>
  )
}
