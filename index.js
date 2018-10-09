import Expo from 'expo';
import AppContainer from './src/containers/AppContainer';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(AppContainer);
