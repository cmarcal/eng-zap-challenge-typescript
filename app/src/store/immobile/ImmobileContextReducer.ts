import {ImmobileContextState} from './ImmobileContext';

export type ImmobileContextActionTypes =
	| { type: 'CHANGE_IMMOBILE'; immobileData: ImmobileContextState };

const reducer = (state: ImmobileContextState, action: ImmobileContextActionTypes) => {
  switch(action.type) {
    case 'CHANGE_IMMOBILE':
      return {...action.immobileData}

    default: {
      return { ...state };
    }
  }
}

export default reducer;
