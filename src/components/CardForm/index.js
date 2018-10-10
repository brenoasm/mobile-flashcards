import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

import Button from '../Button';

const propTypes = {};

const defaultProps = {};

const CardForm = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formControl}>
          <Text style={styles.formText}>Question</Text>
          <TextInput
            underlineColorAndroid={theme.white}
            style={styles.formField}
            maxLength={255}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formText}>Answer</Text>
          <TextInput
            underlineColorAndroid={theme.white}
            style={styles.formField}
            maxLength={255}
          />
        </View>
      </View>
      <View style={styles.actionContainer}>
        <Button text="Save a new flashcard" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center'
  },
  formContainer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

CardForm.propTypes = propTypes;
CardForm.defaultProps = defaultProps;

export default CardForm;
