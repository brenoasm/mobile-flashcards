import {
  TOGGLE_ANSWER_VISIBILITY,
  SETUP_QUIZ,
  CORRECT_ANSWER,
  INCORRECT_ANSWER
} from './index';

export const toggleAnswerVisibility = showAnswer => ({
  type: TOGGLE_ANSWER_VISIBILITY,
  payload: showAnswer
});

export const onCorrectPress = () => ({
  type: CORRECT_ANSWER
});

export const onIncorrectPress = () => ({
  type: INCORRECT_ANSWER
});

export const setupQuiz = cards => ({
  type: SETUP_QUIZ,
  payload: cards
});
