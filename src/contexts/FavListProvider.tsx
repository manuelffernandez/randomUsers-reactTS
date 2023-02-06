import { FavListContext } from './FavListContext';
import { FavListProviderProps, User } from '../interfaces';
import useFavList from '../hooks/useFavList';

const FavListProvider = (props: FavListProviderProps): JSX.Element => {
  const { children } = props;

  const [favListState, dispatch] = useFavList();

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
