import React, { ReactElement } from 'react'
import Skeleton from 'react-loading-skeleton';
import { InforCardContainer } from '../styles';

interface Props {
 amountSkeletons: number 
}

export const LoadingSkeleton = ({amountSkeletons}: Props): ReactElement => {

  const mountSkeleton = (): Array<ReactElement> => {
    const elements = []
    for (let index = 1; index <= amountSkeletons; index++) {
      elements.push(
        <InforCardContainer key={index}>
          <Skeleton height={170} />
          <Skeleton height={25} count={3} style={{marginTop: '12px'}} />
        </InforCardContainer>
      )
    }
    return elements
  }

  return (<>{mountSkeleton()}</>)
   
}
