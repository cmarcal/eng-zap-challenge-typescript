import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export const Button = (props: Props) => {
	const { text, ...rest } = props;
	return <ButtonContainer {...rest}>{text}</ButtonContainer>;
};
