import React , {useEffect} from 'react'
import { useImmobileList , ValidUrls} from '../../hooks/useImmobileList';
import { CompanyContainer } from './styles';

interface Props {
  path: ValidUrls | '';
}

export const CompanyTemplate = ({path}: Props) => {

  const {handleImmobileList, errGetList, immobileBasicList, isLoading} = useImmobileList()

  useEffect(() => {
    path && handleImmobileList(path)
  }, [handleImmobileList, path])
  console.log(immobileBasicList)
  return (
    <CompanyContainer>
    
    </CompanyContainer>
  )
}
