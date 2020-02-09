import React from 'react';
import ApplicationLayout from './src/ApplicationLayout';

import Loading from './src/sections/components/Loading';
import {Provider} from 'react-redux';

// Persistent store
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ApplicationLayout></ApplicationLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
