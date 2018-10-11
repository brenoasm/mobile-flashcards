import { uuid } from '../utils/uuid-generator';

import { CREATE_CARD } from './';

export const submit = (propertiesToSubmit, navigate) => dispatch => {
  const card = {
    ...propertiesToSubmit,
    id: uuid()
  };

  // Adicionar card no AsyncStorage

  dispatch(createCard(card));
  return navigate('Decks');
};

export const createCard = card => ({
  type: CREATE_CARD,
  payload: card
});
