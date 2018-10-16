import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

import Button from '../Button';

const propTypes = {
  showAnswer: PropTypes.bool,
  totalCards: PropTypes.number,
  totalAnsweredCards: PropTypes.number,
  card: PropTypes.object,
  toggleAnswerVisibility: PropTypes.func,
  onCorrectPress: PropTypes.func,
  onIncorrectPress: PropTypes.func
};

const defaultProps = {
  showAnswer: false,
  totalCards: 0,
  totalAnsweredCards: 0,
  card: {
    answer: '',
    question: ''
  },
  toggleAnswerVisibility: () => {},
  onCorrectPress: () => {},
  onIncorrectPress: () => {}
};

const Quiz = ({
  showAnswer,
  totalCards,
  totalAnsweredCards,
  card,
  toggleAnswerVisibility,
  onCorrectPress,
  onIncorrectPress
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardsLeft}>
        {totalAnsweredCards + 1}/{totalCards}
      </Text>
      <View style={styles.content}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {showAnswer ? card.answer : card.question}
          </Text>
          <Text
            style={styles.textAux}
            onPress={() =>
              showAnswer
                ? toggleAnswerVisibility(false)
                : toggleAnswerVisibility(true)
            }
          >
            {showAnswer ? 'See the Question' : 'See the Answer'}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={onIncorrectPress} text="Incorrect" />
          <Button
            onPress={onCorrectPress}
            text="Correct"
            buttonStyle={{ backgroundColor: 'green', marginTop: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    padding: 10
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cardsLeft: {
    fontSize: 24,
    color: theme.white
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  questionText: {
    fontSize: 34,
    color: theme.white,
    textAlign: 'center'
  },
  textAux: {
    fontSize: 24,
    color: theme.black,
    textAlign: 'center'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Quiz.propTypes = propTypes;
Quiz.defaultProps = defaultProps;

export default Quiz;
