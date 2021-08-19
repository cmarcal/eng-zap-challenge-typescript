import React from 'react'
import { HeaderContainer } from './styles'
import { useRouter } from 'next/router'
import { GroupZap, VivaReal, Zap } from '../brands'


export const Header = () => {
  const { asPath } = useRouter()

  const getLogo = () => {
    switch (asPath) {
      case 'zap':
        return <Zap />
      case 'vivaReal':
        return <VivaReal />
      default:
        return <GroupZap width='10%'/>;
    }
  }
  return (
    <HeaderContainer>
      {getLogo()}
    </HeaderContainer>
  )
}
