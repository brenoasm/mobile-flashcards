import { CREATE_DECK, HANDLE_DECKS } from '../actions';

import { validValue } from '../utils/validations';

const deckState = {
  decks: [],
  formProperties: {
    id: {
      isFormField: false,
      isValid: true,
    },
    title: {
      isFormField: true,
      validations: [validValue],
      isValid: null
    }
  }
};

export default DeckReducer = (state = deckState, action) => {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        decks: [
          ...state.decks,
          action.payload
        ]
      }

    case HANDLE_DECKS:
      return {
        ...state,
        decks: action.payload
      }

    default:
      return state;
  }
};
