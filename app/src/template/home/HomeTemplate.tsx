import React from 'react';
import { Title, SubTitle } from '../../components/texts';
import { HomeContainer, DescriptionContainer, ButtonsContainer } from './styles';
import { Header } from '../../components/header';
import { VivaRealButton, ZapButton } from '../../components/buttons/';

export const HomeTemplate = () => {
	return (
		<HomeContainer>
			<Header />
			<DescriptionContainer >
				<Title text='Prepare a mudança'/>
				<SubTitle text='Aproveite nossas oportunidades, os melhores imóveis estão aqui' />
				<ButtonsContainer>
					<VivaRealButton widthBrand='60%' onClick={()=> alert('click VivaRealButton')}/>
					<ZapButton widthBrand='35%' onClick={()=> alert('click ZapButton')}/>
				</ButtonsContainer>
			</DescriptionContainer>

		</HomeContainer>
	);
};
