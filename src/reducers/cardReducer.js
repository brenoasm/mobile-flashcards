import { CREATE_CARD, HANDLE_CARDS } from '../actions';

const cardState = {
  cards: [
    // {
    //   id: '1',
    //   belongingDeckId: '1',
    //   question: 'What is React?',
    //   answer: 'A library for managing user interfaces'
    // },
    // {
    //   id: '2',
    //   belongingDeckId: '1',
    //   question: 'Where do you make Ajax requests in React?',
    //   answer: 'The componentDidMount lifecycle event'
    // },
    // {
    //   id: '3',
    //   belongingDeckId: '2',
    //   question: 'What is a closure?',
    //   answer:
    //     'The combination of a function and the lexical environment within which that function was declared.'
    // }
  ],
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
      validations: [],
      isFormField: true,
      isValid: null,
    },
    answer: {
      validations: [],
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
