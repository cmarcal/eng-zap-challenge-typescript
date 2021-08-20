import React from 'react'
import { HeaderContainer } from './styles'
import { useRouter } from 'next/router'
import { GroupZap, VivaReal, Zap } from '../brands'


export const Header = () => {
  const { asPath } = useRouter()

  const getLogo = () => {
    switch (asPath.substring(1)) {
      case 'zap':
        return <Zap />
      case 'vivareal':
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
