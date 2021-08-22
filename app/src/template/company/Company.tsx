import React , {useEffect, useState} from 'react'
import { FiltersImmobileButton } from 'src/components/buttons/filtersImmobile/FiltersImmobileButton';
import { FilterImmobile, useImmobileList , ValidUrls} from '../../hooks/useImmobileList';
import { ImmobileList } from './components/ImmobileList';
import { CompanyContainer, ListContainer, FilterContainer } from './styles';

interface Props {
  path: ValidUrls | '';
}
export const CompanyTemplate = ({path}: Props) => {
  const [activeFilter, setActiveFilter] = useState<FilterImmobile>('ALL')
  const {handleImmobileList, errGetList, immobileBasicList, isLoading , handleImmobileListFilter} = useImmobileList()

  useEffect(() => {
    path && handleImmobileList(path)
  }, [handleImmobileList, path])

  const handleFilter = (immobileType: FilterImmobile) => {
    setActiveFilter(immobileType);
    handleImmobileListFilter(path as ValidUrls, immobileType)
  }

  return (
    <CompanyContainer>
      <FilterContainer>
        <FiltersImmobileButton activeFilter={activeFilter} path={path as ValidUrls} handleClick={handleFilter} />
      </FilterContainer>
      <ListContainer>
        <ImmobileList path={path} isLoading={isLoading} immobileBasicList={immobileBasicList}/>
      </ListContainer>
    </CompanyContainer>
  )
}
