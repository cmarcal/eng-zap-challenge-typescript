import React from 'react'
import { CarouselContainer } from './styles'
import { Carousel as CarouselLib } from 'react-responsive-carousel'
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type SizeImage = {
  width: number;
  height: number;
}
export interface Props {
  images: Array<string>
  sizeImages: SizeImage;
  centerMode?: boolean;
  centerSlidePercentage?: number;
}

export const Carousel = ({images, sizeImages, centerMode, centerSlidePercentage}: Props) => {
  return (
    <CarouselContainer data-testid='CarouselContainer'>
      <CarouselLib infiniteLoop useKeyboardArrows showThumbs={false} showStatus={false} centerMode={centerMode} centerSlidePercentage={centerSlidePercentage}>
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
