import React  from 'react'
import { useImmobileList } from '../../hooks/useImmobileList';
import { Header } from '../../components/header'
import { CompanyContainer } from './styles';


export const CompanyTemplate = () => {

  const {handleImmobileList, errGetList, immobileList, isLoading} = useImmobileList()

  return (
    <CompanyContainer>
      <Header />
      <div style={{marginTop: '80px'}}>
        <button onClick={()=>handleImmobileList('zap')}>aaa</button>

      </div>
    </CompanyContainer>
  )
}
