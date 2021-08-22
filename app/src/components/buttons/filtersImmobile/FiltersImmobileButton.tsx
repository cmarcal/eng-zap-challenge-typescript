import React, { ReactElement } from 'react'
import { FilterImmobile, ValidUrls } from '../../../hooks/useImmobileList'
import { GroupButtonContianer , Buttons} from './styles'

interface Props {
  path: ValidUrls;
  handleClick:(companny: ValidUrls, immobileType: FilterImmobile)=> void;
}

export const FiltersImmobileButton = ({handleClick, path}: Props): ReactElement => {
  return (
    <GroupButtonContianer>
      <Buttons onClick={()=> handleClick(path, 'RENTAL')}>Aluguel</Buttons>
      <Buttons onClick={()=> handleClick(path, 'SALE')}>Compra</Buttons>
      <Buttons onClick={()=> handleClick(path, 'ALL')}>Todos</Buttons>
    </GroupButtonContianer>
  )
}
