import { ON_DECK_PRESS, CREATE_DECK, HANDLE_DECKS } from './';

import { uuid } from '../utils/uuid-generator';

import { getDecks, saveDeck } from '../utils/storage';

export const getDecksFromStore = () => dispatch => {
  getDecks()
    .then(decks => dispatch(handleDecks(decks)))
    .catch(err => console.error('Erro ao carregar store', err));
};

export const handleDecks = decks => ({
  type: HANDLE_DECKS,
  payload: decks
});

export const onDeckPress = ({ deck }) => ({
  type: ON_DECK_PRESS,
  payload: deck
});

export const submitDeck = (propertiesToSubmit, navigate) => dispatch => {
  const deck = {
    ...propertiesToSubmit,
    id: uuid()
  };

  return saveDeck(deck)
    .then(() => {
      dispatch(createDeck(deck));

      return navigate('ConfirmationScreen', {
        questionText:
          'Deck successfully submited! Do you want to create another Deck?',
        confirmationButtonText: 'Yes, I want to continue',
        cancelButtonText: 'No, I want to go back',
        onConfirm: () => navigate('DeckForm')
      });
    })
    .catch(err => console.error('Erro ao cadastrar um novo baralho', err));
};

export const createDeck = deck => ({
  type: CREATE_DECK,
  payload: deck
});
