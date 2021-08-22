import React from 'react'
import { HeaderContainer } from './styles'
import { useRouter } from 'next/router'
import { GroupZap, VivaReal, Zap } from '../brands'


export const Header = () => {
  const { query } = useRouter()
  const isHome = Object.keys(query).length === 0

  const getLogo = () => {
    switch (query.company) {
      case 'zap':
        return <Zap width='6%'/>
      case 'vivareal':
        return <VivaReal width='10%' headerBrand />
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
