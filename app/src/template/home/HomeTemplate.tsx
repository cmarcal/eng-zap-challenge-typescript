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
				<Title text='A sua nova casa está aqui com a gente!'/>
				<SubTitle text='Alugue ou compre seu imóvel no conforto do sue sofá' />
				<ButtonsContainer>
					<VivaRealButton onClick={()=> alert('click VivaRealButton')}/>
					<ZapButton onClick={()=> alert('click ZapButton')}/>
				</ButtonsContainer>
			</DescriptionContainer>

		</HomeContainer>
	);
};
