import { useState, useCallback } from 'react';
import { ImmobileDTO } from '../services/IServices';
import { getImmobileList } from '../services/get';
import { validationLatandLon, rulesVivaReal, rulesZap } from './helpAuxFunctions';

export type ValidUrls = 'zap' | 'vivareal'
export type FilterImmobile = 'RENTAL' | 'SALE' | 'ALL'
interface ReturnHooks {
  immobileBasicList: ImmobileDTO[]; 
  isLoading: boolean;
  totalItens: number;
  currentImmobile: ImmobileDTO | undefined;
  handleImmobileList: (filter: ValidUrls) => void;
  handleImmobileListFilter: (companny: ValidUrls, immobileType: FilterImmobile, page:number) => void;
  getImmobileById: (id: string) => void;
}
const elmtsPerPage = 20;
export const useImmobileList = (): ReturnHooks => {
  const [immobileBasicList, setImmobileBasicList] = useState<Array<ImmobileDTO>>([]);
  const [currentImmobile, setCurrentImmobile] = useState<ImmobileDTO>();
  const [staticList, setStaticList] = useState<Array<ImmobileDTO>>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [totalItens, setTotalItens] = useState<number>(0);


  const handleImmobileListFilter = useCallback((companny: ValidUrls, immobileType: FilterImmobile, page: number) => {
    const shallowList = [...staticList]
    const skip = (page - 1) * elmtsPerPage;
    const take =  page * elmtsPerPage

    if (immobileType === 'ALL') {
      const listWithPagination = shallowList.slice(skip , take);
      setTotalItens(shallowList.length);

      return setImmobileBasicList(listWithPagination);
    }

    const filterList = shallowList.filter(el => el.pricingInfos.businessType === immobileType);
    setTotalItens(filterList.length);

    setImmobileBasicList(filterList.slice(skip , take));
  },[staticList])

  const factoryCreateLists = (list: Array<ImmobileDTO>) => {
    setisLoading(false);
    setStaticList(list);
    setTotalItens(list.length);
    setImmobileBasicList(list.slice(0, elmtsPerPage));
  }

  const handleZapImmobileList = useCallback((data: Array<ImmobileDTO>):void => {
    const zapList = rulesZap(data);
    factoryCreateLists(zapList)
  },[])

  const handleVivaRealImmobileList = useCallback((data: Array<ImmobileDTO>):void => {
    const vivarealList = rulesVivaReal(data);
    factoryCreateLists(vivarealList)
  },[])

  const handleImmobileList = useCallback((filter: ValidUrls) => {
    setisLoading(true);

    getImmobileList()
      .then(({data}) =>{
        const tratedLatandLon = validationLatandLon(data);

        if(filter === 'zap') handleZapImmobileList(tratedLatandLon)
        if(filter === 'vivareal') handleVivaRealImmobileList(tratedLatandLon)
 
      }).catch((err) => {
        console.error('Failed retrieving information', err);
      });
  },[handleZapImmobileList, handleVivaRealImmobileList])


  const getImmobileById = useCallback((id: string) => {
    setisLoading(true);
    getImmobileList()
      .then(({data}) =>{
        const tratedLatandLon = validationLatandLon(data);
        const localImmobile = tratedLatandLon.filter(elt => elt.id === id);
        setCurrentImmobile(localImmobile[0] || null)
    }).catch((err) => {
      console.error('Failed retrieving information', err);
    });

  },[])

   

  return { immobileBasicList, isLoading, totalItens, currentImmobile, handleImmobileList, handleImmobileListFilter, getImmobileById }
}