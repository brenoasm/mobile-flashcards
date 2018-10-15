import { uuid } from '../utils/uuid-generator';

import { getCards } from '../utils/storage';

import { CREATE_CARD, HANDLE_CARDS } from './';

export const getCardsFromStore = () => dispatch => {
  return getCards()
    .then(cards => dispatch(handleGetCards(cards)))
    .catch(err => console.error('Erro ao carregar os cards', err));
};

export const handleGetCards = cards => ({
  type: HANDLE_CARDS,
  payload: cards
});

export const submit = (propertiesToSubmit, navigate) => dispatch => {
  const card = {
    ...propertiesToSubmit,
    id: uuid()
  };

  // Adicionar card no AsyncStorage

  dispatch(createCard(card));

  navigate('ConfirmationScreen', {
    questionText:
      'Card successfully submited! Do you want to create another Card?',
    confirmationButtonText: 'Yes, I want to continue',
    cancelButtonText: 'No, I want to go back',
    onConfirm: () =>
      navigate('CardForm', {
        deckId: card.belongingDeckId
      })
  });
};

export const createCard = card => ({
  type: CREATE_CARD,
  payload: card
});
