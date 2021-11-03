import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { SWRConfig } from 'swr';

const App = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        fetcher: (url) => fetch(url).then(res => res.json())
      }}
    >
      <MainNavigator />
    </SWRConfig>
  )
};

export default App;
