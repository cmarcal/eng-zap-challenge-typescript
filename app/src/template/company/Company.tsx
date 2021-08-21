import React , {useEffect} from 'react'
import { InfoCard } from '../../components/infoCard/InfoCard';
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
  return (
    <CompanyContainer>
      {immobileBasicList.map(el => (
        <InfoCard key={el.id} info={el} companny={path}/>
      ))}
    </CompanyContainer>
  )
}
