import { CREATE_CARD, HANDLE_CARDS } from '../actions';

import { validValue } from '../utils/validations';

const cardState = {
  cards: [],
  formProperties: {
    id: {
      isFormField: false,
      isValid: true,
    },
    belongingDeckId: {
      isFormField: false,
      isValid: true,
    },
    question: {
      validations: [validValue],
      isFormField: true,
      isValid: null,
    },
    answer: {
      validations: [validValue],
      isFormField: true,
      isValid: null,
    }
  }
};

export default CardReducer = (state = cardState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          action.payload
        ]
      }

    case HANDLE_CARDS:
      return {
        ...state,
        cards: action.payload
      }

    default:
      return state;
  }
};
