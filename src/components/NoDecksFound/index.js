import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import theme from '../../theme';

const NoDecksFound = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      No decks found. Please add a deck to start to play!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    color: theme.white,
    fontSize: 34,
    textAlign: 'center'
  }
});

export default NoDecksFound;
