import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { compose } from 'redux';

import theme from "../../theme";

import Button from "../Button";
import CustomTextInput from "../CustomTextInput";

const propTypes = {
  disabledSubmit: PropTypes.bool,
  handleClearForm: PropTypes.func,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  properties: PropTypes.object
};

const defaultProps = {
  disabledSubmit: true,
  handleClearForm: () => {},
  handleInput: () => {},
  handleSubmit: () => {},
  properties: {}
};

const CardForm = ({
  disabledSubmit,
  handleClearForm,
  handleInput,
  handleSubmit,
  properties
}) => {
  const { question, answer } = properties;
  const errors =
    Object.keys(properties).length > 0
      ? Object.keys(properties).reduce((newArray, propName) => {
          const prop = properties[propName];

          return {
            ...newArray,
            ...prop.errors
          };
        }, {})
      : [];

  const composedSubmit = compose(
    handleClearForm,
    handleSubmit
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formControl}>
          <Text style={styles.formText}>Question</Text>
          <CustomTextInput
            underlineColorAndroid={theme.white}
            style={styles.formField}
            maxLength={255}
            onChange={handleInput}
            name={question ? question.name : ""}
            value={question ? question.value : ""}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formText}>Answer</Text>
          <CustomTextInput
            underlineColorAndroid={theme.white}
            style={styles.formField}
            maxLength={255}
            onChange={handleInput}
            name={answer ? answer.name : ""}
            value={answer ? answer.value : ""}
          />
        </View>
      </View>
      <View style={styles.actionContainer}>
        {errors.length > 0 && errors.map(error => <Text>{error}</Text>)}
        <Button
          onPress={composedSubmit}
          disabled={disabledSubmit}
          buttonStyle={disabledSubmit ? { opacity: 0.5 } : {}}
          text="Save a new flashcard"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primaryColor
  },
  formControl: {
    width: 300,
    marginBottom: 10
  },
  formField: {
    marginTop: 5,
    paddingBottom: 5,
    color: theme.white,
    fontSize: 24
  },
  formText: {
    color: theme.white,
    fontSize: 20
  },
  actionContainer: {
    flex: 1,
    justifyContent: "center"
  },
  formContainer: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

CardForm.propTypes = propTypes;
CardForm.defaultProps = defaultProps;

export default CardForm;
