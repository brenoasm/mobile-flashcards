import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import theme from '../../theme';

import CustomTextInput from '../CustomTextInput';
import Button from '../Button';

const propTypes = {
  disabledSubmit: PropTypes.bool,
  handleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  properties: PropTypes.object
};

const defaultProps = {
  disabledSubmit: true,
  handleInput: () => {},
  handleSubmit: () => {},
  properties: {}
};

const DeckForm = ({
  disabledSubmit,
  handleInput,
  handleClearForm,
  handleSubmit,
  properties
}) => {
  const { title } = properties;

  const composedSubmit = compose(
    handleClearForm,
    handleSubmit
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <Text style={styles.title}>What is the name of your new Deck?</Text>
        <View style={styles.formControl}>
          <CustomTextInput
            underlineColorAndroid={theme.white}
            style={styles.formField}
            onChange={handleInput}
            name={title ? title.name : ''}
            value={title ? title.value : ''}
          />
        </View>
        <Button
          text='Adicionar Baralho'
          buttonStyle={disabledSubmit ? { opacity: 0.5 } : {}}
          disabled={disabledSubmit}
          onPress={composedSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    flex: 1
  },
  formContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  formControl: {
    width: 300,
  },
  formField: {
    fontSize: 28,
    color: theme.white,
    paddingBottom: 5
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
    color: theme.white
  }
});

DeckForm.propTypes = propTypes;
DeckForm.defaultProps = defaultProps;

export default DeckForm;
