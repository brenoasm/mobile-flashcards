import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

import Button from '../Button';

const propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        questionText: PropTypes.string,
        confirmationButtonText: PropTypes.string,
        cancelButtonText: PropTypes.string,
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func
      })
    })
  })
};

const defaultProps = {
  navigation: {
    state: {
      params: {
        questionText: 'Tela de confirmação',
        confirmationButtonText: 'Aceitar',
        cancelButtonText: 'Voltar para a tela inicial',
        onConfirm: () => {},
        onCancel: null
      }
    }
  }
};

const goToHome = navigation => navigation.navigate('Decks');

const ConfirmationScreen = ({ navigation }) => {
  const {
    questionText,
    confirmationButtonText,
    cancelButtonText,
    onConfirm,
    onCancel
  } = navigation.state.params || defaultProps.navigation.state.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{questionText}</Text>
        <View>
          <Button
            text={cancelButtonText}
            buttonStyle={{ backgroundColor: 'yellow', marginBottom: 10 }}
            onPress={onCancel ? onCancel : () => goToHome(navigation)}
          />
          <Button text={confirmationButtonText} onPress={onConfirm} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10
  },
  title: {
    fontSize: 38,
    color: theme.white,
    textAlign: 'center'
  }
});

ConfirmationScreen.propTypes = propTypes;
ConfirmationScreen.defaultProps = defaultProps;

export default ConfirmationScreen;
