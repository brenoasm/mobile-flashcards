export const getCards = ({ cards }) => cards;
export const getDeckCards = (deckId, { cards }) => cards.filter(card => card.belongingDeckId === deckId);
export const getFormProperties = ({ formProperties }) => formProperties;
