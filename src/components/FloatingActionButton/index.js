import React from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

const propTypes = {
  onPress: PropTypes.func
};

const defaultProps = {
  onPress: () => {}
};

const FloatingActionButton = ({ onPress }) => (
  <TouchableNativeFeedback onPress={() => onPress()}>
    <View style={styles.floatingButton}>
      <Text style={styles.text}>+</Text>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: theme.white,
    elevation: 10,
    position: 'absolute',
    bottom: 16,
    right: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 21,
    paddingRight: 21,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: '600'
  }
});

FloatingActionButton.propTypes = propTypes;
FloatingActionButton.defaultProps = defaultProps;

export default FloatingActionButton;
