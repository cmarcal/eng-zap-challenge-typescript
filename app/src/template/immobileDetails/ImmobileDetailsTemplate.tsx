import React , { useContext } from 'react'
import { useRouter } from 'next/router'
import { SubTitle, Title } from '../../components/texts';
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
import { ListPayments } from './components/valueCard/styles';


export const ImmobileDetailsTemplate = () => {
  const {colorTextByCompanny} = useGetCompannyColor();
  const router = useRouter()
  
  const {
    immobileContextState
	} = useContext(ImmobileContext);
  
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
      <SliderContainer>
        <Carousel images={immobileContextState.images} centerMode  sizeImages={{width: 5, height: 2.4}} centerSlidePercentage={55}/>
      </SliderContainer>
      <BodyContainer>
        <DescriptionsContainer>
          <LinkButton color={colorTextByCompanny(router.query.company as string)} onClick={handleBackPage} content={contentLinkButton}/>
          
          <Title text={typeAnnouncement(immobileContextState.pricingInfos.businessType)} color={colors.black} />
          <CityLabel>{immobileContextState.address.city}, {immobileContextState.address.neighborhood}</CityLabel>

          <PostCreatedAt createdAt={immobileContextState.createdAt} />

          <QuickInfos
            colorIcon={colorTextByCompanny(router.query.company as string)}
            parkingSpaces={immobileContextState.parkingSpaces}
            usableAreas={immobileContextState.usableAreas}
            bedrooms={immobileContextState.bedrooms}
            bathrooms={immobileContextState.bathrooms} />

          <MoreDetails>
            <LabelMoreDetails color={colorTextByCompanny(router.query.company as string)}>O que facilita para conseguir este imóvel:</LabelMoreDetails>
            <ListMoreDetails>
              <ItenListMoreDetails><IoCheckmarkCircleOutline /> Ter uma bom score de crédito</ItenListMoreDetails>
              <ItenListMoreDetails><IoCheckmarkCircleOutline /> Renda ativa</ItenListMoreDetails>
              <ItenListMoreDetails><IoCheckmarkCircleOutline /> Bom histórico de pagamento</ItenListMoreDetails>
             { immobileContextState.pricingInfos.businessType === 'RENTAL' && <ItenListMoreDetails><IoCheckmarkCircleOutline /> Renda mensal de pelo menos {valueImmobile(Number(immobileContextState.pricingInfos.price) * 3)}</ItenListMoreDetails>}
             { immobileContextState.pricingInfos.businessType === 'SALE' && <ItenListMoreDetails><IoCheckmarkCircleOutline /> Valor de entrada de pelo menos {valueImmobile(Number(immobileContextState.pricingInfos.price) * 0.20)}</ItenListMoreDetails>}
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
          <ValueCard pricingInfos={immobileContextState.pricingInfos} />

        </ValueContainer>

       
      </BodyContainer>
    </DetailsContainer>
  )
}
