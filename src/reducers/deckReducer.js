const deckState = {
  decks: [
    {
      id: '1',
      title: 'React'
    },
    {
      id: '2',
      title: 'Javascript'
    }
  ]
};

export default DeckReducer = (state = deckState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
