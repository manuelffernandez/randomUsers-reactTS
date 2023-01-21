import { useState } from 'react';
import { UsersList, FavList } from './components';

interface AppState {
  error: { isError: boolean; errorMsg?: string };
}

function App() {
  const [error, setError] = useState<AppState['error']>({ isError: false });

  const handleError = (errorMsg: string): void => {
    setError({ isError: true, errorMsg });
  };

  const loadContent = () => {
    if (!error.isError) {
      return (
        <>
          <UsersList handleError={handleError}></UsersList>
          <FavList />
        </>
      );
    }
    return <h1>Error {error.errorMsg}</h1>;
  };

  return <div className='App'>{loadContent()}</div>;
}

export default App;
