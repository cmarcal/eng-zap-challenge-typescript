import React from 'react'
import { TitleContainer } from './styles'
import { Props } from './ITexts'


export const Title = ({text}: Props) => {
  return (
    <TitleContainer data-testid='TitleContainer'>
      {text}
    </TitleContainer>
  )
}
