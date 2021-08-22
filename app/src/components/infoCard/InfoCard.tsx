import React, { ReactElement } from 'react'
import { BasicImmobileList } from '../../services/IServices'
import { InforCardContainer , BodyContainer, TileContainer, Price, ListInfoContainer ,ItemList, LinkButton} from './styles';
import { Carousel } from '../carousel';
import { FaShower, FaBed, FaCar } from 'react-icons/fa'
import { Title } from '../texts';
import { colors } from '../../assets/colorsToken';
import router from 'next/router';
import { useInfoCard } from './useInfoCard';
interface Props {
  info: BasicImmobileList;
  companny: string;
}

export const InfoCard = ({info, companny}: Props): ReactElement => {
  const {id, bathrooms, bedrooms, images, parkingSpaces, usableAreas, pricingInfos} = info;
  const { colorTextByCompanny, typeAnnouncement, valueImmobile } = useInfoCard();

  const goToPage = `/${companny}/${id}`;
  const valueToFormat = pricingInfos.businessType === 'SALE' ? parseFloat(pricingInfos.price) : parseFloat(pricingInfos.rentalTotalPrice as string);
  
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
          
          <LinkButton onClick={()=>router.push(goToPage)} colorText={colorTextByCompanny(companny)}>Mais informações</LinkButton>
      </BodyContainer>
    </InforCardContainer>
  )
}
