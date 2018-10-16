import React, { Component, Fragment } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Quiz from '../../components/Quiz';
import QuizResult from '../../components/QuizResult';

import {
  getActualCard,
  getTotalCards,
  getTotalAnsweredCards,
  getShowAnswer,
  getTotalCorrectAnswers,
  getTotalIncorrectAnswers
} from '../../selectors/quizSelector';

import {
  toggleAnswerVisibility,
  onCorrectPress,
  onIncorrectPress,
  setupQuiz
} from '../../actions/quizAction';

class QuizContainer extends Component {
  componentDidMount() {
    this.props.setupQuiz();
  }

  theQuizIsOver = ({ totalAnsweredCards, totalCards }) =>
    totalAnsweredCards === totalCards;

  goToDeck = () => {
    const { navigation } = this.props;

    navigation.navigate('DeckDetail', {
      deckId: navigation.state.params.deckId
    });
  }

  playAgain = () => {
    const { navigation } = this.props;

    navigation.push('Quiz', {
      cards: navigation.state.params.cards
    });
  }

  render() {
    const {
      actualCard,
      totalCards,
      totalAnsweredCards,
      showAnswer,
      toggleAnswerVisibility,
      onCorrectPress,
      onIncorrectPress,
      totalCorrectAnswers,
      totalIncorrectAnswers
    } = this.props;

    const { theQuizIsOver, goToDeck, playAgain } = this;

    return (
      <Fragment>
        {actualCard ? (
          <Quiz
            card={actualCard}
            totalCards={totalCards}
            totalAnsweredCards={totalAnsweredCards}
            showAnswer={showAnswer}
            toggleAnswerVisibility={toggleAnswerVisibility}
            onCorrectPress={onCorrectPress}
            onIncorrectPress={onIncorrectPress}
          />
        ) : theQuizIsOver(totalAnsweredCards, totalCards) ? (
          <QuizResult
            totalCorrectAnswers={totalCorrectAnswers}
            totalIncorrectAnswers={totalIncorrectAnswers}
            totalAnswers={totalAnsweredCards}
            goToDeck={goToDeck}
            playAgain={playAgain}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ quizState }) => ({
  actualCard: getActualCard(quizState),
  totalCards: getTotalCards(quizState),
  totalAnsweredCards: getTotalAnsweredCards(quizState),
  totalCorrectAnswers: getTotalCorrectAnswers(quizState),
  totalIncorrectAnswers: getTotalIncorrectAnswers(quizState),
  showAnswer: getShowAnswer(quizState)
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  toggleAnswerVisibility: showAnswer =>
    dispatch(toggleAnswerVisibility(showAnswer)),
  onCorrectPress: () => dispatch(onCorrectPress()),
  onIncorrectPress: () => dispatch(onIncorrectPress()),
  setupQuiz: () => dispatch(setupQuiz(navigation.state.params.cards))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);
