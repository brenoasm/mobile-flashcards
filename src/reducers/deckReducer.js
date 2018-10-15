import { CREATE_DECK, HANDLE_DECKS } from '../actions';

const deckState = {
  decks: [
    // {
    //   id: '1',
    //   title: 'React'
    // },
    // {
    //   id: '2',
    //   title: 'Javascript'
    // }
  ],
  formProperties: {
    id: {
      isFormField: false,
      isValid: true,
    },
    title: {
      isFormField: true,
      validations: [],
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
