import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getDecks } from '../../selectors/deckSelector';

import { getDecksFromStore } from '../../actions/deckAction';

import { getCards } from '../../selectors/cardSelector';

import { getCardsFromStore } from '../../actions/cardAction';

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

  goToDeckForm = () => {
    const { navigation } = this.props;

    navigation.navigate('DeckForm');
  };

  onDeckPress = deck => {
    const { navigation } = this.props;

    navigation.navigate('DeckDetail', {
      deckId: deck.id,
      deckTitle: deck.title
    });
  };

  componentDidMount() {
    this.props.loadStore();
  }

  componentDidUpdate(prevProps) {
    const { decks, cards } = this.props;

    if (
      (decks && cards && prevProps.decks.length !== decks.length) ||
      prevProps.cards.length !== cards.length
    ) {
      this.setupDecks(decks, cards);
    }
  }

  render() {
    const { decks } = this.state;

    return (
      <Decks
        decks={decks}
        onDeckPress={this.onDeckPress}
        goToDeckForm={this.goToDeckForm}
      />
    );
  }
}

const mapStateToProps = ({ deckState, cardState }) => ({
  decks: getDecks(deckState),
  cards: getCards(cardState)
});

const mapDispatchToProps = dispatch => ({
  loadStore: compose(
    () => dispatch(getDecksFromStore()),
    () => dispatch(getCardsFromStore())
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksContainer);
