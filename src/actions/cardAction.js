import { uuid } from '../utils/uuid-generator';

import { getCards, saveCard } from '../utils/storage';

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

  return saveCard(card)
    .then(() => {
      dispatch(createCard(card));

      return navigate('ConfirmationScreen', {
        questionText:
          'Card successfully submited! Do you want to create another Card?',
        confirmationButtonText: 'Yes, I want to continue',
        cancelButtonText: 'No, I want to go back',
        onConfirm: () =>
          navigate('CardForm', {
            deckId: card.belongingDeckId
          })
      });
    })
    .catch(err => console.error('Erro ao cadastrar novo card', err));
};

export const createCard = card => ({
  type: CREATE_CARD,
  payload: card
});
