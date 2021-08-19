import React from 'react'
import { colors } from 'src/assets/colorsToken'
import { VivaReal } from 'src/components/brands'
import { Button } from '../Button'

interface Props {
  onClick(): void;
  widthBrand?: string;
}

export const VivaRealButton = ({onClick, widthBrand}: Props) => {
  return (
    <Button  content={<VivaReal width={widthBrand} />} onClick={onClick} color={colors.blueVivalReal} />
  )
}
