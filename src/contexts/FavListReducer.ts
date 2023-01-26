import { FavListState, FavListAction } from '../interfaces/contexts';

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
