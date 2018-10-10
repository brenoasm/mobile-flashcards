import React from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './src/reducers';

import AppContainer from './src/containers/AppContainer';

const store = createStore(Reducers);

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

const AppEntry = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

Expo.registerRootComponent(AppEntry);
