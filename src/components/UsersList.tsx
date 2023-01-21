import { useState, useEffect } from 'react';
import { UserCard, GenericButton } from './index';
import fetchData from '../services/fetchData';
import { User, APIUser, UsersQty } from '../interfaces';
import useCounter from '../hooks/useCounter';
import mapFromApiToUser from '../utils/usersTransform';

interface UsersListState {
  users: Array<User>;
  usersAmount: {
    amount: UsersQty;
  };
}

interface UsersListProps {
  handleError: (errorMsg: string) => void;
}

const UsersList = (props: UsersListProps): JSX.Element => {
  const { handleError } = props;
  const [usersAmount, setUsersAmount] = useState<UsersListState['usersAmount']>(
    { amount: 5 }
  );
  const [users, setUsers] = useState<UsersListState['users']>([]);
  const [count, handleAddition] = useCounter(5);

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
      <div className='users__list'>
        {users.map(
          (user): JSX.Element => (
            <UserCard key={user.id} user={user} />
          )
        )}
      </div>
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

export default UsersList;
