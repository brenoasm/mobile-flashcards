import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import {
  clearLocalNotification,
  setLocalNotification
} from '../../utils/storage';

import theme from '../../theme';

import Button from '../Button';

const propTypes = {
  totalCorrectAnswers: PropTypes.number,
  totalIncorrectAnswers: PropTypes.number,
  totalAnswers: PropTypes.number,
  goToDeck: PropTypes.func,
  playAgain: PropTypes.func
};

const defaultProps = {
  totalCorrectAnswers: 0,
  totalIncorrectAnswers: 0,
  totalAnswers: 0,
  goToDeck: () => {},
  playAgain: () => {}
};

class QuizResult extends PureComponent {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification());
  }

  render() {
    const {
      totalCorrectAnswers,
      totalIncorrectAnswers,
      totalAnswers,
      goToDeck,
      playAgain
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>
          You scored {totalCorrectAnswers} and missed {totalIncorrectAnswers}{' '}
          from {totalAnswers} answer(s). Wanna play again?
        </Text>
        <View>
          <Button text="Go to the Deck Screen" onPress={goToDeck} />
          <Button
            buttonStyle={{ backgroundColor: 'green', marginTop: 10 }}
            text="Play again"
            onPress={playAgain}
          />
        </View>
      </View>
    );
  }
}

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
