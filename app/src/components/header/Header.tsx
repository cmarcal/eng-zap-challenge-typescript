import React from 'react'
import { HeaderContainer } from './styles'
import { useRouter } from 'next/router'
import { GroupZap, VivaReal, Zap } from '../brands'


export const Header = () => {
  const { asPath } = useRouter()
  const isHome = asPath === '/';

  const getLogo = () => {
    switch (asPath.substring(1)) {
      case 'zap':
        return <Zap width='6%'/>
      case 'vivareal':
        return <VivaReal width='10%'/>
      default:
        return <GroupZap width='10%'/>;
    }
  }
 
  return (
    <HeaderContainer isHome={isHome} data-testid='HeaderContainer'>
      {getLogo()}
    </HeaderContainer>
  )
}
