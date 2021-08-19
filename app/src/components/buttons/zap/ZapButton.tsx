import React from 'react'
import { colors } from 'src/assets/colorsToken'
import { Zap } from 'src/components/brands'
import { Button } from '../Button'

interface Props {
  onClick(): void;

}

export const ZapButton = ({onClick}: Props) => {
  return (
    <Button content={<Zap />} onClick={onClick} color={colors.white} />

  )
}
