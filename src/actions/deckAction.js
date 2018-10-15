import { ON_DECK_PRESS, CREATE_DECK } from './';

import { uuid } from '../utils/uuid-generator';

export const onDeckPress = ({ deck }) => ({
  type: ON_DECK_PRESS,
  payload: deck
});

export const submitDeck = (propertiesToSubmit, navigate) => dispatch => {
  const deck = {
    ...propertiesToSubmit,
    id: uuid()
  };

  // Fazer integração com o AsyncStorage

  dispatch(createDeck(deck));

  return navigate('ConfirmationScreen', {
    questionText: 'Deck successfully submited! Do you want to create another Deck?',
    confirmationButtonText: 'Yes, I want to continue',
    cancelButtonText: 'No, I want to go back',
    onConfirm: () => navigate('DeckForm'),
  });
}

export const createDeck = deck => ({
  type: CREATE_DECK,
  payload: deck
});
