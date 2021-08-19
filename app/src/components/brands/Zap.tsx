import React from 'react'
import { BrandsProps } from './IBrands'
import { ImageContainer } from './styles'

export const Zap = ({width}: BrandsProps) => {
  return (
    <ImageContainer width={width || 'auto'} data-testid='ZapImage' src="http://cdnfiles.vivareal.com/emails/v2/logo_zap.png" alt='Zap logo'/>
  )
}
