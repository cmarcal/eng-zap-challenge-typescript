import { colors } from 'src/assets/colorsToken';
import styled from 'styled-components';

export const DescriptionContainer = styled.div`
	max-width: 35%;
	padding:0 48px;

	& h1 {
		font-size: 3.5em;
		text-transform:uppercase;
		color: ${colors.greenGroupZap};
		letter-spacing:4px;
		margin: 24px 0;
	}
	& h4 {
		font-size: 2.3em;
		color: grey;
		margin-top: 0;
		letter-spacing:2px;

	}
	@media (max-width: 768px) {
		max-width:100%;
		text-align: center;
		padding:0 32px;

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
	gap: 40px;
	& button {
		width: 40%;
		height:50px;
		border-radius:50px;
	}
	@media (max-width: 768px) {
		& button {
			width: 100%
		}
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
	background-image: url('https://unecentro.com.br/storage/blog_images/miniaturas/2021/01/empty-living-room-with-blue-sofa-plants-and-table-on-empty-white-wall-background-3d-rendering.jpg');
	@media (max-width: 768px) {
		background-position: 49% center;

	}
	`
