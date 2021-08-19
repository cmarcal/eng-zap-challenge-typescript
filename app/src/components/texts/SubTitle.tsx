import React from 'react'
import { Props } from './ITexts'
import { SubTitleContainer } from './styles'

export const SubTitle = ({text}: Props) => {
  return (
    <SubTitleContainer data-testid='SubTitleContainer'>
      {text}
    </SubTitleContainer>
  )
}
