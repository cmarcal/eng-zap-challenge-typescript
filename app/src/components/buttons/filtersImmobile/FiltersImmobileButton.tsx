import React, { ReactElement } from 'react'
import { useGetCompannyColor } from '../../../hooks/useGetCompannyColor'
import { FilterImmobile, ValidUrls } from '../../../hooks/useImmobileList'
import { GroupButtonContianer , Buttons} from './styles'

interface Props {
  path: ValidUrls;
  activeFilter: FilterImmobile;
  handleClick:(immobileType: FilterImmobile)=> void;
}

export const FiltersImmobileButton = ({handleClick, path, activeFilter}: Props): ReactElement => {
  
  const {colorTextByCompanny} = useGetCompannyColor()

  return (
    <GroupButtonContianer>
      <Buttons isActive={activeFilter === 'RENTAL'} color={colorTextByCompanny(path)} onClick={()=> handleClick('RENTAL')}>Aluguel</Buttons>
      <Buttons isActive={activeFilter === 'SALE'}  color={colorTextByCompanny(path)} onClick={()=> handleClick('SALE')}>Compra</Buttons>
      <Buttons isActive={activeFilter === 'ALL'}  color={colorTextByCompanny(path)} onClick={()=> handleClick('ALL')}>Todos</Buttons>
    </GroupButtonContianer>
  )
}
