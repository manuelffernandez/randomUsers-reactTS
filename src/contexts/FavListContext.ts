import { createContext, useContext } from 'react';
import { FavListProviderValue } from '../interfaces';

export const FavListContext = createContext<FavListProviderValue>(
  {} as FavListProviderValue
);

export const getFavListContext = () => {
  return useContext(FavListContext);
};
