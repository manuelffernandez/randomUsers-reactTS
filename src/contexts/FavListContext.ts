import { createContext } from 'react';
import { FavListProviderValue } from '../interfaces';

export const FavListContext = createContext<FavListProviderValue>(
  {} as FavListProviderValue
);
