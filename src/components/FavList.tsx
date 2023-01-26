import { useFavList } from '../hooks/useFavList';
import { UserCard } from './';

const FavList = () => {
  const { favListState, onRemove } = useFavList();

  return (
    <div className='users'>
      <h1 className='users__title'>Favs</h1>
      <ul className='users__list'>
        {favListState.map(
          (user): JSX.Element => (
            <UserCard
              key={user.id}
              user={user}
              btnType={{ title: 'remove', funct: onRemove }}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default FavList;
