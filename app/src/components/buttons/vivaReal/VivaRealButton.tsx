import React from 'react'
import { colors } from 'src/assets/colorsToken'
import { VivaReal } from 'src/components/brands'
import { Button } from '../Button'

interface Props {
  onClick(): void;
}

export const VivaRealButton = ({onClick}: Props) => {
  return (
    <Button content={<VivaReal />} onClick={onClick} color={colors.blueVivalReal} />
  )
}
