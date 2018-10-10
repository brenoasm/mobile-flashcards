import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getDecks } from '../../selectors/deckSelector';
import { getCards } from '../../selectors/cardSelector';

import Decks from '../../components/Decks';

class DecksContainer extends Component {
  state = {
    decks: [],
    cards: []
  };

  setupDecks = (decks, cards) => {
    const parsedDecks = decks.map(deck => {
      const deckCards = cards.filter(card => card.belongingDeckId === deck.id);

      return {
        ...deck,
        cards: deckCards
      };
    });

    this.setState({
      decks: parsedDecks
    });
  };

  onDeckPress = deck => {
    const { navigation } = this.props;

    navigation.navigate('DeckDetail', {
      deckId: deck.id,
      deckTitle: deck.title
    });
  };

  componentDidMount() {
    const { decks, cards } = this.props;

    this.setupDecks(decks, cards);
  }

  componentDidUpdate(prevProps) {
    const { decks, cards } = this.props;

    if (
      prevProps.decks.length !== decks.length ||
      prevProps.cards.length !== cards.length
    ) {
      this.setupDecks(decks, cards);
    }
  }

  render() {
    const { decks } = this.state;

    return (
      <Fragment>
        {Array.isArray(decks) &&
          decks.length > 0 && (
            <Decks decks={decks} onDeckPress={this.onDeckPress} />
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ deckState, cardState }) => ({
  decks: getDecks(deckState),
  cards: getCards(cardState)
});

export default connect(mapStateToProps)(DecksContainer);
