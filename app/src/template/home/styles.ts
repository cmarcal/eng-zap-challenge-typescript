import styled from 'styled-components';

export const DescriptionContainer = styled.div`
	max-width: 40%;
	padding:0 32px ;

	& h1 {
		font-size: 4em
	}
	& h4 {
		font-size: 1.8em;
		width:60%;
	}
	@media (max-width: 768px) {
		max-width:100%;
		text-align: center;
		& h1 {
			font-size: 3em
		}
		& h4 {
			font-size: 1.6em;
			width:100%;
		}
	}
`

export const ButtonsContainer = styled.div`
	display:flex;
	gap: 16px;
	@media (max-width: 768px) {
		justify-content:center;
	}
`

export const HomeContainer = styled.div`
	padding:16px 0 ;
	width: 100vw;
	height: 100%;
	overflow: hidden;
	background-size: cover;
	position: relative;
	background-position: 50% center;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	background-image: url('https://www.ctt.pt/contentAsset/raw-data/a44a7ee1-22d6-44d2-a499-c4a89cb8bc98/imagemBanner/d112c19d-c592-4522-857d-9519fbcf2747');
	@media (max-width: 768px) {
		background-position: 77% center;

	}
	`
