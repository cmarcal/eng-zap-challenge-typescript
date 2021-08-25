import React, { ReactElement, useContext } from 'react'
import { ImmobileDTO } from '../../services/IServices'
import { InforCardContainer , BodyContainer, TileContainer, Price, ListInfoContainer ,ItemList, LinkButton} from './styles';
import { Carousel } from '../carousel';
import { FaShower, FaBed, FaCar } from 'react-icons/fa'
import { Title } from '../texts';
import router from 'next/router';
import { useInfoCard } from './useInfoCard';
import { ImmobileContext } from '../../store/immobile/ImmobileContext';
export interface Props {
  info: ImmobileDTO;
  companny: string;
}

export const InfoCard = ({info, companny}: Props): ReactElement => {
  const {id, bathrooms, bedrooms, images, parkingSpaces, usableAreas, pricingInfos} = info;
  const { colorTextByCompanny, typeAnnouncement, valueImmobile } = useInfoCard();
  const { immobileContextDispatch } = useContext(ImmobileContext)
  const goToPage = `/${companny}/${id}`;
  const valueToFormat = pricingInfos.businessType === 'SALE' ? parseFloat(pricingInfos.price) : parseFloat(pricingInfos.rentalTotalPrice as string);
  
  const handleClickCard = () => {
    router.push(goToPage, );
    immobileContextDispatch({type: 'CHANGE_IMMOBILE', immobileData: info})
  }

  return (
    <InforCardContainer data-testid="InfoCardContainer">
      <Carousel images={images} sizeImages={{width: 7, height: 5}}/>
      <BodyContainer onClick={handleClickCard}>
        <TileContainer>
          <Title text={typeAnnouncement(pricingInfos.businessType)} size='1.3em'/> 
          <Price colorText={colorTextByCompanny(companny)}>{valueImmobile(valueToFormat)}</Price>
        </TileContainer>
        <ListInfoContainer>
          <ItemList isBold data-testid='usableAreas'> {usableAreas} m²</ItemList>
          {bathrooms > 0 && <ItemList data-testid='bathrooms'><FaShower /> {bathrooms}</ItemList>}
          {bedrooms > 0 && <ItemList data-testid='bedrooms'><FaBed /> {bedrooms}</ItemList>}
          {parkingSpaces > 0 && <ItemList data-testid='parkingSpaces'><FaCar /> {parkingSpaces}</ItemList>}
        </ListInfoContainer>
          
          <LinkButton onClick={handleClickCard} colorText={colorTextByCompanny(companny)}>Mais informações</LinkButton>
      </BodyContainer>
    </InforCardContainer>
  )
}
