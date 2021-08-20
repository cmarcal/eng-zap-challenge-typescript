import { useState, useCallback } from 'react';

type Filter = 'zap' | 'vivareal'

interface ReturnHooks {
  immobileList: any[]; 
  errGetList: string; 
  isLoading: boolean; 
  handleImmobileList: (filter: Filter) => void;
}

export const useImmobileList = (): ReturnHooks => {
  const [immobileList, setImmobileList] = useState<Array<any>>([]);
  const [errGetList, setErrGetList] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);

  const handleImmobileList = useCallback((filter: Filter) => {
    setErrGetList('');
    setisLoading(true);

    fetch(process.env.NEXT_PUBLIC_API as string)
      .then((response) => {
        response.json()
        .then((data) =>{
          console.log(data);
        });
      }).catch((err) => {
        console.error('Failed retrieving information', err);
      });
    setImmobileList([]);
  },[setisLoading, setErrGetList])

  return { immobileList, errGetList, isLoading, handleImmobileList }
}