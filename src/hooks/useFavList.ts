import { useContext } from 'react';
import { FavListContext } from '../contexts/FavListContext';

export const useFavList = () => {
  const { favListState, onAdd, onRemove } = useContext(FavListContext);

  return { favListState, onAdd, onRemove };
};
