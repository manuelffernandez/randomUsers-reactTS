import { useReducer } from 'react';
import { FavListState, FavListAction } from '../interfaces';

const INITIAL_STATE: FavListState['favList'] = [];

export const FavListReducer = (
  state: FavListState['favList'],
  action: FavListAction
): FavListState['favList'] => {
  switch (action.type) {
    case 'addUser':
      if (!state.find(user => user.id === action.payload.id)) {
        return [...state, action.payload];
      }

    case 'removeUser':
      return state.filter(user => user.id !== action.payload.id);

    default:
      return state;
  }
};

const useFavList = () => {
  return useReducer(FavListReducer, INITIAL_STATE);
};

export default useFavList;
