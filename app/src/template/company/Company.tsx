import React , {useEffect, useState} from 'react'
import { FiltersImmobileButton } from '../../components/buttons/filtersImmobile/FiltersImmobileButton';
import { FilterImmobile, useImmobileList , ValidUrls} from '../../hooks/useImmobileList';
import { ImmobileList } from './components/ImmobileList';
import { Pagination } from '../../components/pagination';
import { CompanyContainer, ListContainer, FilterContainer, BoxContainer } from './styles';
import { SubTitle, Title } from '../../components/texts';
import { useGetCompannyColor } from '../../hooks/useGetCompannyColor';

interface Props {
  path: ValidUrls | '';
}
export const CompanyTemplate = ({path}: Props) => {
  const [activeFilter, setActiveFilter] = useState<FilterImmobile>('ALL')
  const [activePage, setActivePage] = useState<number>(1)
  const { colorTextByCompanny } = useGetCompannyColor()
  const {handleImmobileList,  immobileBasicList, isLoading , totalItens, handleImmobileListFilter} = useImmobileList()

  useEffect(() => {
    path && handleImmobileList(path)
  }, [handleImmobileList, path])

  const handleFilter = (immobileType: FilterImmobile) => {
    setActiveFilter(immobileType);
    setActivePage(1);
    handleImmobileListFilter(immobileType, 1)
  }

  const handleChangePage = (page: number) => {
    setActivePage(page)
    handleImmobileListFilter( activeFilter, page)
  }
  return (
    <>
    <FilterContainer>
      <BoxContainer>
        <Title size='2.3rem' text='Dê moradia ao seu sonho'/>    
        <FiltersImmobileButton activeFilter={activeFilter} path={path as ValidUrls} handleClick={handleFilter} />
      </BoxContainer>
    </FilterContainer>
    <CompanyContainer>
      <SubTitle color={colorTextByCompanny(path as ValidUrls)} size='1.6rem' text={`${totalItens} imóveis encontrados`} />
      <ListContainer>
        <ImmobileList path={path} isLoading={isLoading} immobileBasicList={immobileBasicList}/>
      </ListContainer>
      <Pagination activePage={activePage} changePage={handleChangePage} totalItens={totalItens} path={path as ValidUrls}/>
    </CompanyContainer>
    </>
  )
}
