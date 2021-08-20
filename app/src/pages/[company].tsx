import React , {useEffect} from 'react';
import { useRouter } from 'next/router'

import { CompanyTemplate } from '../template/company';

const validUrl = ['zap' , 'vivareal', '[company]']; 

export default function Company() {
  const  { asPath, push } = useRouter()

	useEffect(() => {
    const path = asPath.substring(1)
    const routerIsValid = validUrl.includes(path);
    if(!routerIsValid) push('/')
  }, [asPath, push])

	return <CompanyTemplate />;
}
