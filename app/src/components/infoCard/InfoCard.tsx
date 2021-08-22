import React, { ReactElement, useContext } from 'react'
import { ImmobileDTO } from '../../services/IServices'
import { InforCardContainer , BodyContainer, TileContainer, Price, ListInfoContainer ,ItemList, LinkButton} from './styles';
import { Carousel } from '../carousel';
import { FaShower, FaBed, FaCar } from 'react-icons/fa'
import { Title } from '../texts';
import router from 'next/router';
import { useInfoCard } from './useInfoCard';
import { ImmobileContext } from '../../store/immobile/ImmobileContext';
interface Props {
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
    <InforCardContainer >
      <Carousel images={images} sizeImages={{width: 7, height: 5}}/>
      <BodyContainer>
        <TileContainer>
          <Title text={typeAnnouncement(pricingInfos.businessType)} size='1.3em'/> 
          <Price colorText={colorTextByCompanny(companny)}>{valueImmobile(valueToFormat)}</Price>
        </TileContainer>
        <ListInfoContainer>
          <ItemList isBold > {usableAreas} m²</ItemList>
          {bathrooms > 0 && <ItemList ><FaShower /> {bathrooms}</ItemList>}
          {bedrooms > 0 && <ItemList><FaBed /> {bedrooms}</ItemList>}
          {parkingSpaces > 0 && <ItemList><FaCar /> {parkingSpaces}</ItemList>}
        </ListInfoContainer>
          
          <LinkButton onClick={handleClickCard} colorText={colorTextByCompanny(companny)}>Mais informações</LinkButton>
      </BodyContainer>
    </InforCardContainer>
  )
}
