import { useState } from 'react';
import { UsersQty } from '../interfaces';

interface UseCounterState {
  count: UsersQty;
}

const useCounter = (initalValue: UsersQty): [UsersQty, (n: number) => void] => {
  const [count, setCount] = useState<UseCounterState['count']>(initalValue);

  const handleAddition = (n: number) => {
    let result = count + n;

    if (result !== 6 && result !== 0) {
      setCount(result as UsersQty);
    }
  };

  return [count, handleAddition];
};

export default useCounter;
