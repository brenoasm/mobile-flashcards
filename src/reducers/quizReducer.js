import {
  TOGGLE_ANSWER_VISIBILITY,
  SETUP_QUIZ,
  CORRECT_ANSWER,
  INCORRECT_ANSWER
} from '../actions';

const quizState = {
  showAnswer: false,
  totalCards: 0,
  totalAnsweredCards: 0,
  totalCorrectAnswers: 0,
  totalIncorrectAnswers: 0,
  cards: []
};

export default (QuizReducer = (state = quizState, action) => {
  switch (action.type) {
    case TOGGLE_ANSWER_VISIBILITY:
      return {
        ...state,
        showAnswer: action.payload
      };

    case SETUP_QUIZ:
      return {
        ...quizState,
        totalCards: action.payload.length,
        cards: action.payload
      };

    case CORRECT_ANSWER:
      return {
        ...state,
        totalAnsweredCards: state.totalAnsweredCards + 1,
        totalCorrectAnswers: state.totalCorrectAnswers + 1,
        showAnswer: false
      };

    case INCORRECT_ANSWER:
      return {
        ...state,
        totalAnsweredCards: state.totalAnsweredCards + 1,
        totalIncorrectAnswers: state.totalIncorrectAnswers + 1,
        showAnswer: false
      };

    default:
      return state;
  }
});
