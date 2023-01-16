import { useState } from 'react';
import UserCard from './UserCard';
import GenericButton from './GenericButton';
import { UsersQty } from '../types';

const UsersList = () => {
  const [count, setCount] = useState<UsersQty>(1);

  const handleClick = (n: number) => {
    let result = count + n;

    if (result !== 6 && result !== 0) {
      setCount(result as UsersQty);
      return;
    }
  };

  return (
    <div className='users'>
      <h1 className='users__title'>Users</h1>
      <div className='users__list'>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className='users__keypad'>
        <p>{count}</p>
        <GenericButton onClick={() => handleClick(1)}>Sumar</GenericButton>
        <GenericButton onClick={() => handleClick(-1)}>Restar</GenericButton>
        <GenericButton onClick={() => setCount(1)}>Buscar</GenericButton>
      </div>
    </div>
  );
};

export default UsersList;
