import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import { ButtonContainer } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	content: string | ReactElement;
	color?: string;
}

export const Button = (props: Props) => {
	const { content, color, ...rest } = props;
	return (
		<ButtonContainer  data-testid='ButtonContianer' color={color} {...rest}>
			{content}
		</ButtonContainer>
	);
};
