import React from 'react'
import { CarouselContainer } from './styles'
import { Carousel as CarouselLib } from 'react-responsive-carousel'
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type SizeImage = {
  width: number;
  height: number;
}
interface Props {
  images: Array<string>
  sizeImages:SizeImage
}

export const Carousel = ({images, sizeImages}: Props) => {
  return (
    <CarouselContainer>
      <CarouselLib infiniteLoop useKeyboardArrows showThumbs={false}>
          {images.map((img, idx) => (
            <Image 
              width={sizeImages.width}
              height={sizeImages.height} 
              key={idx} 
              src={img} 
              alt={`image${idx}`} 
              layout="responsive"/>

          ))}
      </CarouselLib>
    </CarouselContainer>
  )
}
