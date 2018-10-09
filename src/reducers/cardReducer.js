const cardState = {
  cards: [
    {
      belongingDeckId: '1',
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    {
      belongingDeckId: '1',
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    },
    {
      belongingDeckId: '2',
      question: 'What is a closure?',
      answer:
        'The combination of a function and the lexical environment within which that function was declared.'
    }
  ]
};

export default CardReducer = (state = cardState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
