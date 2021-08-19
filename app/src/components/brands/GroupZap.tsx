import React from 'react';
import { ImageContainer } from './styles';

interface Props  {
  width?: string
}
export const GroupZap = ({width}: Props) => {
  return (
    <ImageContainer data-testid='GroupZapImage' width={width || 'auto'} src='https://v.fastcdn.co/t/3854b641/7a7f287a/1558965795-30797501-220x38-logo.png' alt='Group Zap logo'/>
  )
}
