import React from 'react'
import { FaBed, FaCar, FaShower } from 'react-icons/fa'
import { IoResizeOutline } from 'react-icons/io5'
import { QuickInfosContainer, QuickItens } from './styles'

interface Props {
  usableAreas: number
  bathrooms: number
  bedrooms: number
  parkingSpaces: number
  colorIcon: string
}

export const QuickInfos = ({ usableAreas, bathrooms, bedrooms, parkingSpaces, colorIcon}: Props) => {
  return (
    <QuickInfosContainer>
      <QuickItens>
        <IoResizeOutline style={{color: colorIcon}} /> <span>{usableAreas}m² </span>
      </QuickItens>
      <QuickItens>
        <FaShower style={{color: colorIcon}} /> {bathrooms} banheiros
      </QuickItens>
      <QuickItens>
        <FaBed style={{color: colorIcon}} /> {bedrooms} quartos
      </QuickItens>
      <QuickItens>
        <FaCar style={{color: colorIcon}} /> {parkingSpaces} vagas
      </QuickItens>
  </QuickInfosContainer>
  )
}
