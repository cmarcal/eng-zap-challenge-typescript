import React, { ButtonHTMLAttributes, ReactElement } from 'react'
import {LinkButotnContainer} from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string | ReactElement;
  color?: string;
}

export const LinkButton = (props: Props):ReactElement => {
  const { content, color, ...rest } = props;

  return (
    <LinkButotnContainer color={color} {...rest}>
      {content}
    </LinkButotnContainer>
  )
}
