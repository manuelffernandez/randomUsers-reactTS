import { useState } from 'react';
import { UserList, FavList } from './components';
import FavListProvider from './contexts/FavListProvider';

interface AppState {
  error: { isError: boolean; errorMsg?: string };
}

function App(): JSX.Element {
  const [error, setError] = useState<AppState['error']>({ isError: false });

  const handleError = (errorMsg: string): void => {
    setError({ isError: true, errorMsg });
  };

  const loadContent = (): JSX.Element => {
    if (!error.isError) {
      return (
        <>
          <UserList handleError={handleError}></UserList>
          <FavList />
        </>
      );
    }
    return <h1>Error {error.errorMsg}</h1>;
  };

  return (
    <FavListProvider>
      <div className='App'>{loadContent()}</div>
    </FavListProvider>
  );
}

export default App;
