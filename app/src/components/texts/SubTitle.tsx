import React from 'react'
import { Props } from './ITexts'
import { SubTitleContainer } from './styles'

export const SubTitle = ({text, size, color}: Props) => {
  return (
    <SubTitleContainer color={color} size={size} data-testid='SubTitleContainer'>
      {text}
    </SubTitleContainer>
  )
}
