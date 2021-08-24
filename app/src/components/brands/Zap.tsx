import React from 'react'
import { BrandsProps } from './IBrands'
import { ImageContainer } from './styles'

export const Zap = ({width, onClick}: BrandsProps) => {
  return (
    <ImageContainer onClick={onClick} width={width || 'auto'} data-testid='ZapImage' src="https://cdnfiles.vivareal.com/emails/v2/logo_zap.png" alt='Zap logo'/>
  )
}
