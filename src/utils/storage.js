import { AsyncStorage } from 'react-native';

const FLASHCARDS_DECKS_KEY = 'flashcards_decks_key';
const FLASHCARDS_CARDS_KEY = 'flashcards_cards_key';

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_DECKS_KEY)
    .then(result => JSON.parse(result));
}

export const getCards = () => {
  return AsyncStorage.getItem(FLASHCARDS_CARDS_KEY)
    .then(result => JSON.parse(result));
}

export const getDeck = () => {

}

export const saveDeck = () => {

}

export const addCardToDeck = () => {

}
