import { useState, useCallback } from 'react';
import { ImmobileDTO } from '../services/IServices';
import { getImmobileList } from '../services/get';
import { validationLatandLon, rulesVivaReal, rulesZap } from './helpAuxFunctions';

export type ValidUrls = 'zap' | 'vivareal'
export type FilterImmobile = 'RENTAL' | 'SALE' | 'ALL'
interface ReturnHooks {
  immobileBasicList: ImmobileDTO[]; 
  errGetList: string; 
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
  const [errGetList, setErrGetList] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [totalItens, setTotalItens] = useState<number>(0);


  const handleImmobileListFilter = useCallback((companny: ValidUrls, immobileType: FilterImmobile, page: number) => {
    const shallowList = [...staticList]
    const skip = (page - 1) * elmtsPerPage;

    if (immobileType === 'ALL') {
      const listWithPagination = shallowList.slice(skip , page *  elmtsPerPage);
      setTotalItens(staticList.length);

      return setImmobileBasicList(listWithPagination);
    }

    const filterList = shallowList.filter(el => el.pricingInfos.businessType === immobileType);
    setTotalItens(filterList.length);

    setImmobileBasicList(filterList.slice(skip , page *  elmtsPerPage));
  },[staticList])

  const handleZapImmobileList = useCallback((data: Array<ImmobileDTO>):void => {
    setisLoading(false);
    const zapList = rulesZap(data);
    setStaticList(zapList);
    setTotalItens(zapList.length);

    setImmobileBasicList(zapList.slice(0, elmtsPerPage));

  },[])

  const handleVivaRealImmobileList = useCallback((data: Array<ImmobileDTO>):void => {
    setisLoading(false);
    const vivarealList = rulesVivaReal(data);
    setStaticList(vivarealList);
    setTotalItens(vivarealList.length);
    setImmobileBasicList(vivarealList.slice(0, elmtsPerPage));
  },[])

  const handleImmobileList = useCallback((filter: ValidUrls) => {
    setErrGetList('');
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

   

  return { immobileBasicList, errGetList, isLoading, totalItens, currentImmobile, handleImmobileList, handleImmobileListFilter, getImmobileById }
}