import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';

const propTypes = {

};

const defaultProps = {};

const CustomStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

CustomStatusBar.propTypes = propTypes;
CustomStatusBar.defaultProps = defaultProps;

export default CustomStatusBar;
