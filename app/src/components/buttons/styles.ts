import styled from 'styled-components';

export const ButtonContainer = styled.button<{color?: string}>`
	cursor: pointer;
	border: 1px solid transparent;
	border-radius: 8px;
	padding:8px;
	background-color: ${({color}) => color};
	&:hover {
		opacity: 0.6;
		transition: 0.4s;
	}
	&:focus {
		outline: none;
	}
`;
