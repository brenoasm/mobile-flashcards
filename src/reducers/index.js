import { combineReducers } from 'redux';

import DeckReducer from './deckReducer';
import CardReducer from './cardReducer';

export default combineReducers({
  deckState: DeckReducer,
  cardState: CardReducer
});
