import { FavListContext } from './FavListContext';
import { useReducer } from 'react';
import { FavListProviderProps, FavListState, User } from '../interfaces';
import { FavListReducer } from './FavListReducer';

const INITIAL_STATE: FavListState['favList'] = [];

const FavListProvider = (props: FavListProviderProps): JSX.Element => {
  const { children } = props;

  const [favListState, dispatch] = useReducer(FavListReducer, INITIAL_STATE);

  const onAdd = (user: User) => {
    dispatch({ type: 'addUser', payload: user });
  };

  const onRemove = (user: User) => {
    dispatch({ type: 'removeUser', payload: user });
  };

  return (
    <FavListContext.Provider value={{ favListState, onAdd, onRemove }}>
      {children}
    </FavListContext.Provider>
  );
};

export default FavListProvider;
