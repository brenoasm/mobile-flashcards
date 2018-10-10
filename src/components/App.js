import React, { Fragment } from 'react';
import { ActivityIndicator, View } from 'react-native';

import CustomStatusBar from './CustomStatusBar';
import CustomStackNavigator from './CustomStackNavigator';

const App = ({ loading }) => (
  <Fragment>
    {loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <View style={{ flex: 1 }}>
        <CustomStatusBar />
        <CustomStackNavigator />
      </View>
    )}
  </Fragment>
);

export default App;
