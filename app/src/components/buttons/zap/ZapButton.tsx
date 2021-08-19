import React from 'react'
import { colors } from 'src/assets/colorsToken'
import { Zap } from 'src/components/brands'
import { Button } from '../Button'

interface Props {
  onClick(): void;
  widthBrand?: string;
}

export const ZapButton = ({onClick, widthBrand}: Props) => {
  return (
    <Button content={<Zap width={widthBrand} />} onClick={onClick} color={colors.white} />

  )
}
