import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

import Button from '../Button';

const propTypes = {};

const defaultProps = {};

const QuizResult = ({
  totalCorrectAnswers,
  totalIncorrectAnswers,
  totalAnswers,
  goToHome,
  playAgain
}) => (
  <View style={styles.container}>
    <Text style={styles.resultText}>
      You scored {totalCorrectAnswers} and missed {totalIncorrectAnswers} from{' '}
      {totalAnswers} answer(s). Wanna play again?
    </Text>
    <View>
      <Button text="Go to main screen" onPress={goToHome} />
      <Button
        buttonStyle={{ backgroundColor: 'green', marginTop: 10 }}
        text="Play again"
        onPress={playAgain}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
    padding: 10
  },
  resultText: {
    color: theme.white,
    textAlign: 'center',
    fontSize: 34
  }
});

QuizResult.propTypes = propTypes;
QuizResult.defaultProps = defaultProps;

export default QuizResult;
