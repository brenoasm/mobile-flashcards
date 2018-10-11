import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";

const propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  props: PropTypes.object
};

const defaultProps = {
  onChange: () => {},
  name: ""
};

const CustomTextInput = ({ onChange, name, ...props }) => {
  return (
    <TextInput
      onChange={e => {
        const value = e.nativeEvent.text || "";

        return onChange({
          target: {
            name,
            value
          }
        });
      }}
      {...props}
    />
  );
};

CustomTextInput.propTypes = propTypes;
CustomTextInput.defaultProps = defaultProps;

export default CustomTextInput;
