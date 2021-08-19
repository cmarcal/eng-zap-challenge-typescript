import React from 'react'
import { BrandsProps } from './IBrands'
import { ImageContainer } from './styles'

export const VivaReal = ({width}: BrandsProps) => {
  return (
    <ImageContainer width={width || 'auto'} data-testid='VivaRealImage' src="http://cdnfiles.vivareal.com/emails/v2/logo-vivareal.png" alt='Viva Real logo'/>
  )
}
