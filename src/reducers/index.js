import { combineReducers } from 'redux';

import DeckReducer from './deckReducer';
import CardReducer from './cardReducer';
import QuizReducer from './quizReducer';

export default combineReducers({
  deckState: DeckReducer,
  cardState: CardReducer,
  quizState: QuizReducer
});
