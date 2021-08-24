import React , {useEffect, useState} from 'react'
import { FiltersImmobileButton } from 'src/components/buttons/filtersImmobile/FiltersImmobileButton';
import { FilterImmobile, useImmobileList , ValidUrls} from '../../hooks/useImmobileList';
import { ImmobileList } from './components/ImmobileList';
import { Pagination } from '../../components/pagination';
import { CompanyContainer, ListContainer, FilterContainer } from './styles';

interface Props {
  path: ValidUrls | '';
}
export const CompanyTemplate = ({path}: Props) => {
  const [activeFilter, setActiveFilter] = useState<FilterImmobile>('ALL')
  const [activePage, setActivePage] = useState<number>(1)

  const {handleImmobileList,  immobileBasicList, isLoading , totalItens, handleImmobileListFilter} = useImmobileList()

  useEffect(() => {
    path && handleImmobileList(path)
  }, [handleImmobileList, path])

  const handleFilter = (immobileType: FilterImmobile) => {
    setActiveFilter(immobileType);
    setActivePage(1);
    handleImmobileListFilter(path as ValidUrls, immobileType, 1)
  }

  const handleChangePage = (page: number) => {
    setActivePage(page)
    handleImmobileListFilter(path as ValidUrls, activeFilter, page)
  }

  return (
    <CompanyContainer>
      <FilterContainer>
        <FiltersImmobileButton activeFilter={activeFilter} path={path as ValidUrls} handleClick={handleFilter} />
      </FilterContainer>
      <ListContainer>
        <ImmobileList path={path} isLoading={isLoading} immobileBasicList={immobileBasicList}/>
      </ListContainer>
      <Pagination activePage={activePage} changePage={handleChangePage} totalItens={totalItens} path={path as ValidUrls}/>
    </CompanyContainer>
  )
}
