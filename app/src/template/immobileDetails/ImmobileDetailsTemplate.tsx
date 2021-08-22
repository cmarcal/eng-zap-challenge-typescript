import React , { useContext } from 'react'
import { ImmobileContext } from '../../store/immobile/ImmobileContext';

export const ImmobileDetailsTemplate = () => {

  const {
		immobileContextState
	} = useContext(ImmobileContext);
  
  return (
    <div>
      teste
    </div>
  )
}
