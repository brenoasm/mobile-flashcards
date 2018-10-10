import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

const propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object
};

const defaultProps = {
  onPress: () => {},
  text: 'Click me',
  buttonStyle: {},
  buttonTextStyle: {}
};

const Button = ({ onPress, text, buttonStyle, buttonTextStyle }) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={{ ...styles.btnStyle, ...buttonStyle }}
  >
    <Text style={{ ...styles.btnTextStyle, ...buttonTextStyle }}>{text}</Text>
  </TouchableOpacity>
);

const styles = {
  btnStyle: {
    backgroundColor: theme.red,
    minWidth: 170,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  btnTextStyle: {
    color: theme.white,
    fontSize: 24
  }
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
