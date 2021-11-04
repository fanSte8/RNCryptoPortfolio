import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SWRConfig } from 'swr';

const App = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        fetcher: (url) => fetch(url).then(res => res.json())
      }}
    >
      <AppNavigator />
    </SWRConfig>
  )
};

export default App;
