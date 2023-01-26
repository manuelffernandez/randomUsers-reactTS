import { User } from './';

export type FavListAction =
  | { type: 'addUser'; payload: User }
  | { type: 'removeUser'; payload: User };

export interface FavListProviderProps {
  children: JSX.Element | Array<JSX.Element>;
}

export interface FavListState {
  favList: Array<User>;
}

export interface FavListProviderValue {
  favListState: FavListState['favList'];
  onAdd: (u: User) => void;
  onRemove: (u: User) => void;
}
