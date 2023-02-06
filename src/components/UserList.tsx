import { useState, useEffect } from 'react';
import { UserCard, GenericButton } from './index';
import fetchData from '../services/fetchData';
import { User, APIUser, UsersQty } from '../interfaces';
import useCounter from '../hooks/useCounter';
import mapFromApiToUser from '../utils/usersTransform';
import { getFavListContext } from '../contexts/FavListContext';

interface UserListState {
  users: Array<User>;
  usersAmount: {
    amount: UsersQty;
  };
}

interface UserListProps {
  handleError: (errorMsg: string) => void;
}

const UserList = (props: UserListProps): JSX.Element => {
  const { handleError } = props;

  const [usersAmount, setUsersAmount] = useState<UserListState['usersAmount']>({
    amount: 5,
  });
  const [users, setUsers] = useState<UserListState['users']>([]);

  const [count, handleAddition] = useCounter(5);

  const { onAdd } = getFavListContext();

  useEffect(() => {
    fetchData.getUsers(usersAmount.amount).then(APIResponse => {
      if (APIResponse.isOk) {
        setUsers(mapFromApiToUser(APIResponse.data as Array<APIUser>));
      } else {
        handleError(APIResponse.data as string);
      }
    });
  }, [usersAmount]);

  return (
    <div className='users'>
      <h1 className='users__title'>Users</h1>
      <ul className='users__list'>
        {users.map(
          (user): JSX.Element => (
            <UserCard
              key={user.id}
              user={user}
              btnType={{ title: 'add', funct: onAdd }}
            />
          )
        )}
      </ul>
      <div className='users__keypad'>
        <p>{count}</p>
        <GenericButton onClick={() => handleAddition(1)}>+</GenericButton>
        <GenericButton onClick={() => handleAddition(-1)}>-</GenericButton>
        <GenericButton onClick={() => setUsersAmount({ amount: count })}>
          Refresh
        </GenericButton>
      </div>
    </div>
  );
};

export default UserList;
