import React from 'react'
import { HeaderContainer, NavigationContainer, NavigationItens } from './styles'
import { useRouter } from 'next/router'
import { GroupZap, VivaReal, Zap } from '../brands'
import { ReactElement } from 'react'
import { useGetCompannyColor } from '../../hooks/useGetCompannyColor'

type NavigationItem = {label: string, path: string;}
type Navigation = Array<NavigationItem>

export const Header = (): ReactElement => {
  const { query, push } = useRouter()
  const {colorTextByCompanny} = useGetCompannyColor();

  const isHome = Object.keys(query).length === 0

  const getLogo = () => {
    switch (query.company) {
      case 'zap':
        return <Zap onClick={()=> push('/zap')} width='6%'/>
      case 'vivareal':
        return <VivaReal onClick={()=> push('/vivareal')}  width='10%' headerBrand />
      default:
        return <GroupZap onClick={()=> push('/')}  width='10%'/>;
    }
  }

  const navigation = (): Navigation => {
    const itens: Navigation = [];

    switch (query.company) {
      case 'zap':
        itens.push({label: 'Imóveis Viva Real', path: '/vivareal'});
        return itens;
      case 'vivareal':
        itens.push({label: 'Imóveis Zap', path: '/zap'});
        return itens;
      default:
        return itens;
    }

  }
 
  return (
    <HeaderContainer isHome={isHome} data-testid='HeaderContainer'>
      {getLogo()}
      {!isHome && (
        <NavigationContainer>
          <NavigationItens onClick={()=> push('/')} colorText={colorTextByCompanny(query.company as string)}>Home</NavigationItens>
        {navigation().map((el, idx) => (
          <NavigationItens  onClick={()=> push(el.path)} colorText={colorTextByCompanny(query.company as string)} key={idx}>{el.label}</NavigationItens>
        ))}
        </NavigationContainer>
      )}
    </HeaderContainer>
  )
}
