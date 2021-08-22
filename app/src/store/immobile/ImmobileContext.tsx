import { createContext } from 'react';
import { ImmobileDTO } from '../../services/IServices';

export interface ImmobileContextState extends ImmobileDTO {}
type Dispatch = (action: any) => void;
type Context = { immobileContextState: ImmobileContextState; immobileContextDispatch: Dispatch };

export const ImmobileContext = createContext<Context>({} as Context);

