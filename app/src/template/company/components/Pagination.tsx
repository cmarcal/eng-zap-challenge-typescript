import React, { ReactElement, useState } from 'react'
import { useGetCompannyColor } from 'src/hooks/useGetCompannyColor';
import { ValidUrls } from '../../../hooks/useImmobileList';
import { PaginationContainer, PaginationItem } from './styles';

interface Props {
  totalItens: number;
  path: ValidUrls;
  activePage: number;
  changePage(position: number): void
}

export const Pagination = ({totalItens, path, activePage, changePage}: Props) => {
  const {colorTextByCompanny} = useGetCompannyColor();

  const paginationItens = (): Array<ReactElement> => {
    const totalPage = totalItens / 24;
    const pages = [];

    for (let index = 1; index <= totalPage; index++) {
      pages.push(<PaginationItem activeItem={index === activePage} key={index}  onClick={()=> changePage(index)} colorText={colorTextByCompanny(path)}>{index}</PaginationItem>);
    }

    return pages;
  }

  return (
    <PaginationContainer>
      {paginationItens()}
    </PaginationContainer>
  )
}
