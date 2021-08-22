import React , {useEffect} from 'react'
import { FiltersImmobileButton } from 'src/components/buttons/filtersImmobile/FiltersImmobileButton';
import { useImmobileList , ValidUrls} from '../../hooks/useImmobileList';
import { ImmobileList } from './components/ImmobileList';
import { CompanyContainer } from './styles';

interface Props {
  path: ValidUrls | '';
}

export const CompanyTemplate = ({path}: Props) => {

  const {handleImmobileList, errGetList, immobileBasicList, isLoading , handleImmobileListFilter} = useImmobileList()

  useEffect(() => {
    path && handleImmobileList(path)
  }, [handleImmobileList, path])

  return (
    <CompanyContainer>
      <div>
        <FiltersImmobileButton path={path as ValidUrls} handleClick={handleImmobileListFilter} />
      </div>
      <ImmobileList path={path} isLoading={isLoading} immobileBasicList={immobileBasicList}/>
    </CompanyContainer>
  )
}
