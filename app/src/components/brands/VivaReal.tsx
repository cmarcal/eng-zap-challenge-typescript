import React from 'react'
import { BrandsProps } from './IBrands'
import { ImageContainer } from './styles'

interface Props extends BrandsProps {
  headerBrand?: boolean;
}

export const VivaReal = ({width, headerBrand, onClick}: Props) => {
  return (
    <>
      { headerBrand ?
        <ImageContainer onClick={onClick} width={width || 'auto'} data-testid='VivaRealImage' src="https://inforce.com.br/wp-content/uploads/2016/12/logo-vivareal-azul-claro-min-1.png" alt='Viva Real logo'/>
        : 
        <ImageContainer onClick={onClick}  width={width || 'auto'} data-testid='VivaRealImage' src="http://cdnfiles.vivareal.com/emails/v2/logo-vivareal.png" alt='Viva Real logo'/>
      }
    </>
    )
}
