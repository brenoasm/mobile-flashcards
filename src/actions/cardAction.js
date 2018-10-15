import { uuid } from '../utils/uuid-generator';

import { CREATE_CARD } from './';

export const submit = (propertiesToSubmit, navigate) => dispatch => {
  const card = {
    ...propertiesToSubmit,
    id: uuid()
  };

  // Adicionar card no AsyncStorage

  dispatch(createCard(card));

  navigate('ConfirmationScreen', {
    questionText: 'Card successfully submited! Do you want to create another Card?',
    confirmationButtonText: 'Yes, I want to continue',
    cancelButtonText: 'No, I want to go back',
    onConfirm: () => navigate('CardForm', {
      deckId: card.belongingDeckId
    }),
  });
};

export const createCard = card => ({
  type: CREATE_CARD,
  payload: card
});
