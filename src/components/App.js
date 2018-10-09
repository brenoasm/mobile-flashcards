import React from 'react';
import { View } from 'react-native';

import CustomStatusBar from './CustomStatusBar';
import CustomStackNavigator from './CustomStackNavigator';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar />
        <CustomStackNavigator />
      </View>
    );
  }
}

export default App;
