import React from 'react'
import { TitleContainer } from './styles'
import { Props } from './ITexts'


export const Title = ({text, size}: Props) => {
  return (
    <TitleContainer size={size} data-testid='TitleContainer'>
      {text}
    </TitleContainer>
  )
}
