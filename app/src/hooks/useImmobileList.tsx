import { useState, useCallback } from 'react';
import { BasicImmobileList, ImmobileDTO } from '../services/IServices';
import { getImmobileList } from '../services/get';

export type ValidUrls = 'zap' | 'vivareal'
export type FilterImmobile = 'RENTAL' | 'SALE' | 'ALL'
interface ReturnHooks {
  immobileBasicList: BasicImmobileList[]; 
  errGetList: string; 
  isLoading: boolean;
  totalItens: number;
  handleImmobileList: (filter: ValidUrls) => void;
  handleImmobileListFilter: (companny: ValidUrls, immobileType: FilterImmobile, page:number) => void;
}
const elmtsPerPage = 24;
export const useImmobileList = (): ReturnHooks => {
  const [immobileBasicList, setImmobileBasicList] = useState<Array<BasicImmobileList>>([]);
  const [staticList, setStaticList] = useState<Array<ImmobileDTO>>([]);
  const [errGetList, setErrGetList] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [totalItens, setTotalItens] = useState<number>(0);

  const tratedBasicList = (data: Array<ImmobileDTO>): Array<BasicImmobileList> => ( 
     data.map(el => {
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
  )

  const handleImmobileListFilter = (companny: ValidUrls, immobileType: FilterImmobile, page: number) => {
    const shallowList = [...staticList]
    const skip = (page - 1) * elmtsPerPage 
    console.log({immobileType, skip});
    if (immobileType === 'ALL') {
      const listWithPagination = shallowList.slice(skip , page *  elmtsPerPage);
      console.log(listWithPagination)
      setTotalItens(staticList.length);

      return setImmobileBasicList(tratedBasicList(listWithPagination));
    }

    const filterList = shallowList.filter(el => el.pricingInfos.businessType === immobileType);
    setTotalItens(filterList.length);

    setImmobileBasicList(filterList.slice(skip , page *  elmtsPerPage));
  }

  const handleZapImmobileList = useCallback((data: Array<ImmobileDTO>):void => {
    const tratedData = tratedBasicList(data);
    setisLoading(false);
    setImmobileBasicList(tratedData);

  },[])

  const handleVivaRealImmobileList = useCallback((data: Array<ImmobileDTO>):void => {
    const tratedData = tratedBasicList(data);

    setisLoading(false);
    setImmobileBasicList(tratedData);
  },[])

  const handleImmobileList = useCallback((filter: ValidUrls) => {
    setErrGetList('');
    setisLoading(true);

    getImmobileList()
      .then((response) => {
        response.json()
        .then((data: Array<ImmobileDTO>) =>{
        
          const newArr = data.slice(0, elmtsPerPage);
          setTotalItens(data.length);
          setStaticList(data);

          if(filter === 'zap') handleZapImmobileList(newArr)
          if(filter === 'vivareal') handleVivaRealImmobileList(newArr)

        });
      }).catch((err) => {
        console.error('Failed retrieving information', err);
      });
  },[handleZapImmobileList, handleVivaRealImmobileList])

  return { immobileBasicList, errGetList, isLoading, totalItens, handleImmobileList, handleImmobileListFilter }
}