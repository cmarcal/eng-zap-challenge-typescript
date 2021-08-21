import { useState, useCallback } from 'react';
import { BasicImmobileList, ImmobileDTO } from '../services/IServices';
import { getImmobileList } from '../services/get';

export type ValidUrls = 'zap' | 'vivareal'

interface ReturnHooks {
  immobileBasicList: any[]; 
  errGetList: string; 
  isLoading: boolean; 
  handleImmobileList: (filter: ValidUrls, page?:number) => void;
}
const elmtsPerPage = 24;
export const useImmobileList = (): ReturnHooks => {
  const [immobileBasicList, setImmobileBasicList] = useState<Array<any>>([]);
  const [errGetList, setErrGetList] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleZapImmobileList = (data: Array<ImmobileDTO>):void => {
    const tratedData = data.map(el => {
      const {id, bathrooms ,bedrooms, images, pricingInfos} = el;
      return {
        id,
        bathrooms,
        bedrooms,
        images,
        pricingInfos
      }
    })
    setImmobileBasicList(tratedData);

  }
  const handleVivaRealImmobileList = (data: Array<ImmobileDTO>):void => {
    const tratedData = data.map(el => {
      const {id, bathrooms ,bedrooms, images, pricingInfos} = el;
      return {
        id,
        bathrooms,
        bedrooms,
        images,
        pricingInfos
      }
    })
    setImmobileBasicList(tratedData);
  }

  const handleImmobileList = useCallback((filter: ValidUrls, page: number = 1) => {
    setErrGetList('');
    setisLoading(true);

    getImmobileList()
      .then((response) => {
        response.json()
        .then((data: Array<ImmobileDTO>) =>{
          console.log(data[1])
          const newArr = data.slice(0, elmtsPerPage)
          
          if(filter === 'zap') handleZapImmobileList(newArr)
          if(filter === 'vivareal') handleVivaRealImmobileList(newArr)

        });
      }).catch((err) => {
        console.error('Failed retrieving information', err);
      });
  },[setisLoading, setErrGetList])

  return { immobileBasicList, errGetList, isLoading, handleImmobileList }
}