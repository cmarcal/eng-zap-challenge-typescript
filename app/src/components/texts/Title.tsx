import React from 'react'
import { TitleContainer } from './styles'
import { Props } from './ITexts'


export const Title = ({text, size, color}: Props) => {
  return (
    <TitleContainer color={color} size={size} data-testid='TitleContainer'>
      {text}
    </TitleContainer>
  )
}
