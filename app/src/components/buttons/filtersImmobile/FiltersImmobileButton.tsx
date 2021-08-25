import React, { ReactElement } from 'react'
import { useGetCompannyColor } from '../../../hooks/useGetCompannyColor'
import { FilterImmobile, ValidUrls } from '../../../hooks/useImmobileList'
import { GroupButtonContianer , Buttons} from './styles'

export interface Props {
  path: ValidUrls;
  activeFilter: FilterImmobile;
  handleClick:(immobileType: FilterImmobile)=> void;
}

export const FiltersImmobileButton = ({handleClick, path, activeFilter}: Props): ReactElement => {
  
  const {colorTextByCompanny} = useGetCompannyColor()

  return (
    <GroupButtonContianer data-testid='FilterButtonContainer' role='groupbutton'>
      <Buttons aria-selected={activeFilter === 'RENTAL'} isActive={activeFilter === 'RENTAL'} color={colorTextByCompanny(path)} onClick={()=> handleClick('RENTAL')}>Aluguel</Buttons>
      <Buttons aria-selected={activeFilter === 'SALE'} isActive={activeFilter === 'SALE'}  color={colorTextByCompanny(path)} onClick={()=> handleClick('SALE')}>Compra</Buttons>
      <Buttons aria-selected={activeFilter === 'ALL'} isActive={activeFilter === 'ALL'}  color={colorTextByCompanny(path)} onClick={()=> handleClick('ALL')}>Todos</Buttons>
    </GroupButtonContianer>
  )
}
