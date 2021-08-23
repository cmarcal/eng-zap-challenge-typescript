import React , { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {  Title } from '../../components/texts';
import { Carousel } from '../../components/carousel';
import { ImmobileContext } from '../../store/immobile/ImmobileContext';
import { SliderContainer, DetailsContainer, BodyContainer, CityLabel, ValueContainer, DescriptionsContainer, ListMoreDetails, ItenListMoreDetails, LabelMoreDetails, MoreDetails, TextMoreDetails } from './styles';
import { IoArrowBackCircleOutline, IoCheckmarkCircleOutline,} from 'react-icons/io5'
import { LinkButton } from '../../components/buttons';
import { useGetCompannyColor } from 'src/hooks/useGetCompannyColor';
import { colors } from '../../assets/colorsToken';
import { QuickInfos } from './components/QuickInfos';
import { PostCreatedAt } from './components/PostCreatedAt';
import { ValueCard } from './components/valueCard/ValueCard';
import { ImmobileDTO } from '../../services/IServices';
import { useImmobileList } from '../../hooks/useImmobileList';

const initState: ImmobileDTO = {
  address : {city: '', neighborhood: '',geoLocation: {location: { lat: 0, lon: 0}, precision: ''}},
  bathrooms: 0,
  bedrooms: 0,
  createdAt: '',
  id: '',
  images: [''],
  listingStatus: '',
  owner: false,
  parkingSpaces:0,
  listingType: '',
  updatedAt: '',
  usableAreas: 0,
  pricingInfos: {businessType: '', monthlyCondoFee:'', price:'', rentalTotalPrice: '', yearlyIptu:''}

}

export const ImmobileDetailsTemplate = () => {
  const {colorTextByCompanny} = useGetCompannyColor();
  const router = useRouter()
  const [localImmobile, setLocalImmobile] = useState<ImmobileDTO>(initState); 
  const {currentImmobile, getImmobileById} = useImmobileList()
  const {
    immobileContextState
	} = useContext(ImmobileContext);

  useEffect(() => {
    if (immobileContextState.id) setLocalImmobile(immobileContextState)
    if (!immobileContextState.id && localImmobile.id === '') getImmobileById(router.query.id as string)
  }, [getImmobileById, immobileContextState, immobileContextState.id, localImmobile.id, router.query.id])

  useEffect(() => {
    if (currentImmobile && currentImmobile?.id === router.query.id as string) {
      setLocalImmobile(currentImmobile)
    }
  }, [currentImmobile, router.query.id])
  
  const contentLinkButton = <><IoArrowBackCircleOutline /> Voltar para lista de imoveis</>;

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
  const valueImmobile = (valueToFormat: number): string => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL' }).format(valueToFormat as number);
  }
  const handleBackPage = () => {
    const route = router.query.company as string;
    router.push({
      pathname: '/[company]',
      query: { company: route },
    })
  }

  return (
    <DetailsContainer>
      {localImmobile && localImmobile.id !== '' && 
      <>
        <SliderContainer>
          <Carousel images={localImmobile.images} centerMode  sizeImages={{width: 5, height: 2.4}} centerSlidePercentage={55}/>
        </SliderContainer>
        <BodyContainer>
        <DescriptionsContainer>
          <LinkButton color={colorTextByCompanny(router.query.company as string)} onClick={handleBackPage} content={contentLinkButton}/>
          
          <Title text={typeAnnouncement(localImmobile.pricingInfos.businessType)} color={colors.black} />
          <CityLabel>{localImmobile.address.city}, {localImmobile.address.neighborhood}</CityLabel>

          <PostCreatedAt createdAt={localImmobile.createdAt} />

          <QuickInfos
            colorIcon={colorTextByCompanny(router.query.company as string)}
            parkingSpaces={localImmobile.parkingSpaces}
            usableAreas={localImmobile.usableAreas}
            bedrooms={localImmobile.bedrooms}
            bathrooms={localImmobile.bathrooms} />

          <MoreDetails>
            <LabelMoreDetails color={colorTextByCompanny(router.query.company as string)}>O que facilita para conseguir este imóvel:</LabelMoreDetails>
            <ListMoreDetails>
              <ItenListMoreDetails><IoCheckmarkCircleOutline /> Ter uma bom score de crédito</ItenListMoreDetails>
              <ItenListMoreDetails><IoCheckmarkCircleOutline /> Renda ativa</ItenListMoreDetails>
              <ItenListMoreDetails><IoCheckmarkCircleOutline /> Bom histórico de pagamento</ItenListMoreDetails>
             { localImmobile.pricingInfos.businessType === 'RENTAL' && <ItenListMoreDetails><IoCheckmarkCircleOutline /> Renda mensal de pelo menos {valueImmobile(Number(localImmobile.pricingInfos.price) * 3)}</ItenListMoreDetails>}
             { localImmobile.pricingInfos.businessType === 'SALE' && <ItenListMoreDetails><IoCheckmarkCircleOutline /> Valor de entrada de pelo menos {valueImmobile(Number(localImmobile.pricingInfos.price) * 0.20)}</ItenListMoreDetails>}
            </ListMoreDetails>
          </MoreDetails>


          <MoreDetails>
            <LabelMoreDetails color={colorTextByCompanny(router.query.company as string)}>Mais sobre o imóvel: </LabelMoreDetails>
            <TextMoreDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet imperdiet neque. In sed odio sem. Aliquam nec aliquet massa. Aliquam commodo tempus egestas. Mauris pellentesque nulla purus, quis rutrum quam dignissim ac. Nulla eu nulla malesuada, auctor mi vitae, vulputate dolor. In sed mi id nisi vulputate elementum. Duis sollicitudin non velit in elementum. Quisque lacinia rutrum tellus non bibendum. Maecenas feugiat arcu sit amet scelerisque hendrerit. Sed urna justo, porttitor et gravida eget, fermentum sodales risus.

Proin mattis ipsum vel massa vehicula, id dapibus turpis dapibus. Aenean quis augue scelerisque, consequat lectus eget, vulputate neque. Pellentesque nunc nulla, auctor non orci eu, malesuada condimentum magna. Pellentesque quis ex tincidunt, suscipit libero eget, lobortis felis. Cras elementum libero vel lorem dapibus, vitae vestibulum justo facilisis. Nulla ornare et purus vitae eleifend. Donec tincidunt ex erat, a sodales urna cursus sit amet. Pellentesque sit amet purus sed eros lobortis malesuada. In hac habitasse platea dictumst. Vestibulum nec tellus eget tellus interdum condimentum. Sed sed arcu ut libero auctor pulvinar. Vivamus et mi a mauris tempus elementum.
            </TextMoreDetails>
          </MoreDetails>

          
          <MoreDetails>
            <LabelMoreDetails color={colorTextByCompanny(router.query.company as string)}>Conhecendo a localidade: </LabelMoreDetails>
            <TextMoreDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet imperdiet neque. In sed odio sem. Aliquam nec aliquet massa. Aliquam commodo tempus egestas. Mauris pellentesque nulla purus, quis rutrum quam dignissim ac. Nulla eu nulla malesuada, auctor mi vitae, vulputate dolor. In sed mi id nisi vulputate elementum. Duis sollicitudin non velit in elementum. Quisque lacinia rutrum tellus non bibendum. Maecenas feugiat arcu sit amet scelerisque hendrerit. Sed urna justo, porttitor et gravida eget, fermentum sodales risus.

Proin mattis ipsum vel massa vehicula, id dapibus turpis dapibus. Aenean quis augue scelerisque, consequat lectus eget, vulputate neque. Pellentesque nunc nulla, auctor non orci eu, malesuada condimentum magna. Pellentesque quis ex tincidunt, suscipit libero eget, lobortis felis. Cras elementum libero vel lorem dapibus, vitae vestibulum justo facilisis. Nulla ornare et purus vitae eleifend. Donec tincidunt ex erat, a sodales urna cursus sit amet. Pellentesque sit amet purus sed eros lobortis malesuada. In hac habitasse platea dictumst. Vestibulum nec tellus eget tellus interdum condimentum. Sed sed arcu ut libero auctor pulvinar. Vivamus et mi a mauris tempus elementum.
            </TextMoreDetails>
          </MoreDetails>

        </DescriptionsContainer>

        <ValueContainer>
          <ValueCard pricingInfos={localImmobile.pricingInfos} />

        </ValueContainer>

       
      </BodyContainer>
      </>
      }
    </DetailsContainer>
  )
}
