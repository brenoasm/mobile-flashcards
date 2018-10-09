import { ON_DECK_PRESS } from './';

export const onDeckPress = ({ deck }) => ({
  type: ON_DECK_PRESS,
  payload: deck
});
