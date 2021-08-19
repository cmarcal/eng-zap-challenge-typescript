import React from 'react'
import { HeaderContainer } from './styles'
import { useRouter } from 'next/router'
import { GroupZap, VivaReal, Zap } from '../brands'


export const Header = () => {
  const { asPath } = useRouter()

  const getLogo = () => {
    console.log(asPath)
    switch (asPath) {
      case 'zap':
        return <Zap />
      case 'vivaReal':
        return <VivaReal />
      default:
        return <GroupZap />;
    }
  }
  return (
    <HeaderContainer data-testid='HeaderContainer'>
      {getLogo()}
    </HeaderContainer>
  )
}
