import React from 'react'
import { BasicImmobileList } from '../../../services/IServices'
import { LoadingSkeleton } from '../../../components/infoCard/loadingSkeleton/LoadingSkeleton';
import { InfoCard } from '../../../components/infoCard/InfoCard';
import { ValidUrls } from '../../../hooks/useImmobileList';

interface Props {
  isLoading: boolean;
  immobileBasicList: Array<BasicImmobileList>
  path: ValidUrls | '' 
}

export const ImmobileList = ({isLoading, immobileBasicList, path}: Props) => {
  return (
    <>
      {isLoading && <LoadingSkeleton amountSkeletons={24} />}
      {immobileBasicList.map(el => (
        <InfoCard key={el.id} info={el} companny={path}/>
      ))}
    </>
  )
}
