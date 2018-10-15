export const getDecks = ({ decks }) => decks;
export const getDeck = (deckId, { decks }) => decks.find(deck => deck.id === deckId);
export const getDeckFormProperties = ({ formProperties }) => formProperties;
