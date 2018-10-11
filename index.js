import React from 'react';
import Expo from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './src/reducers';

import AppContainer from './src/containers/AppContainer';

const store = createStore(Reducers, applyMiddleware(thunk));

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

const AppEntry = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

Expo.registerRootComponent(AppEntry);
