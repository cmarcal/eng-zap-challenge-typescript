import React , { useContext } from 'react'
import { SubTitle, Title } from '../../components/texts';
import { Carousel } from '../../components/carousel';
import { ImmobileContext } from '../../store/immobile/ImmobileContext';
import { SliderContainer, DetailsContainer, BodyContainer, QuickInfosContainer, QuickItens } from './styles';
import { FaShower, FaBed, FaCar } from 'react-icons/fa'
import { SubTitleContainer } from 'src/components/texts/styles';

export const ImmobileDetailsTemplate = () => {

  const {
		immobileContextState
	} = useContext(ImmobileContext);

  const typeAnnouncement = (businessType: string): string => {
    switch (businessType) {
      case 'SALE':
        return 'Imóvel para venda';

      case 'RENTAL':
        return 'Imóvel para aluguel';
    
      default:
        return '';
    }
  }
  const date = new Date(immobileContextState.updatedAt)
  return (
    <DetailsContainer>
      <SliderContainer>
        <Carousel images={immobileContextState.images} centerMode  sizeImages={{width: 5, height: 2.4}} centerSlidePercentage={55}/>
      </SliderContainer>
      <BodyContainer>
        voltar para lista de imoveis
        <Title text={typeAnnouncement(immobileContextState.pricingInfos.businessType)} />
        Ultima atualização: <SubTitle text={date.toLocaleString()}/>
        <QuickInfosContainer>
          <QuickItens>
            m² <span>{immobileContextState.usableAreas}</span>
          </QuickItens>
          <QuickItens>
            <FaShower /> {immobileContextState.bathrooms}
          </QuickItens>
          <QuickItens>
            <FaBed /> {immobileContextState.bedrooms}
          </QuickItens>
          <QuickItens>
            <FaCar /> {immobileContextState.parkingSpaces}
          </QuickItens>
        </QuickInfosContainer>
      </BodyContainer>
    </DetailsContainer>
  )
}
