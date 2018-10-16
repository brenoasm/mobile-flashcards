import { AsyncStorage } from 'react-native';

const FLASHCARDS_DECKS_KEY = 'flashcards_decks_key';
const FLASHCARDS_CARDS_KEY = 'flashcards_cards_key';

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_DECKS_KEY).then(result => result ? JSON.parse(result) : []);
};

export const getCards = () => {
  return AsyncStorage.getItem(FLASHCARDS_CARDS_KEY).then(result => result ? JSON.parse(result) : []);
};

export const saveDeck = deck => {
  return AsyncStorage.getItem(FLASHCARDS_DECKS_KEY).then(results => {
    const decks = results ? JSON.parse(results) : [];
    const alteredDecks = [...decks, deck];

    return AsyncStorage.setItem(FLASHCARDS_DECKS_KEY, JSON.stringify(alteredDecks));
  });
};

export const saveCard = card => {
  return AsyncStorage.getItem(FLASHCARDS_CARDS_KEY).then(results => {
    const cards = results ? JSON.parse(results) : [];
    const alteredCards = [...cards, card];

    return AsyncStorage.setItem(FLASHCARDS_CARDS_KEY, JSON.stringify(alteredCards));
  });
};
