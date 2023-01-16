import { useEffect } from 'react';
import fetchData from './services/fetchData';
import UsersList from './components/UsersList';
import FavList from './components/FavList';

function App() {
  useEffect(() => {
    // fetchData.getUsers(5);
  }, []);

  return (
    <div className='App'>
      <UsersList></UsersList>
      <FavList></FavList>
    </div>
  );
}

export default App;
