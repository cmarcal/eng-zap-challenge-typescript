import { useState, useCallback } from 'react';
import { BasicImmobileList, ImmobileDTO } from '../services/IServices';
import { getImmobileList } from '../services/get';

export type ValidUrls = 'zap' | 'vivareal'
export type FilterImmobile = 'RENTAL' | 'SALE' | 'ALL'
interface ReturnHooks {
  immobileBasicList: BasicImmobileList[]; 
  errGetList: string; 
  isLoading: boolean; 
  handleImmobileList: (filter: ValidUrls, page?:number) => void;
  handleImmobileListFilter: (companny: ValidUrls, immobileType: FilterImmobile) => void;
}
const elmtsPerPage = 24;
export const useImmobileList = (): ReturnHooks => {
  const [immobileBasicList, setImmobileBasicList] = useState<Array<BasicImmobileList>>([]);
  const [staticList, setStaticList] = useState<Array<BasicImmobileList>>([]);
  const [errGetList, setErrGetList] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleImmobileListFilter = (companny: ValidUrls, immobileType: FilterImmobile) => {
    if (immobileType === 'ALL') return setImmobileBasicList(staticList);

    const filterList = staticList.filter(el => el.pricingInfos.businessType === immobileType);
    setImmobileBasicList(filterList);
  }

  const handleZapImmobileList = (data: Array<ImmobileDTO>):void => {
    const tratedData = data.map(el => {
      const {id, bathrooms ,bedrooms, images, parkingSpaces, usableAreas, pricingInfos} = el;
      return {
        id,
        bathrooms,
        bedrooms,
        images,
        pricingInfos,
        usableAreas,
        parkingSpaces
      }
    })
    setisLoading(false);
    setStaticList(tratedData);
    setImmobileBasicList(tratedData);

  }

  const handleVivaRealImmobileList = (data: Array<ImmobileDTO>):void => {
    const tratedData = data.map(el => {
      const {id, bathrooms ,bedrooms, images, pricingInfos, parkingSpaces, usableAreas} = el;
      return {
        id,
        bathrooms,
        bedrooms,
        images,
        usableAreas,
        parkingSpaces,
        pricingInfos
      }
    })
    setisLoading(false);
    setStaticList(tratedData);
    setImmobileBasicList(tratedData);
  }

  const handleImmobileList = useCallback((filter: ValidUrls, page: number = 0) => {
    setErrGetList('');
    setisLoading(true);

    getImmobileList()
      .then((response) => {
        response.json()
        .then((data: Array<ImmobileDTO>) =>{
          const newArr = data.slice(0, elmtsPerPage)
          
          if(filter === 'zap') handleZapImmobileList(newArr)
          if(filter === 'vivareal') handleVivaRealImmobileList(newArr)

        });
      }).catch((err) => {
        console.error('Failed retrieving information', err);
      });
  },[setisLoading, setErrGetList])

  return { immobileBasicList, errGetList, isLoading, handleImmobileList, handleImmobileListFilter }
}