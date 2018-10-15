import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDeck } from '../../selectors/deckSelector';
import { getDeckCards } from '../../selectors/cardSelector';

import DeckDetail from '../../components/DeckDetail';

class DeckDetailContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckTitle } = navigation.state.params;

    return {
      title: deckTitle
    };
  };

  goToAddCard = deckId => {
    const { navigation } = this.props;

    navigation.navigate('CardForm', { deckId });
  };

  goToQuiz = cards => {
    const { navigation } = this.props;

    navigation.navigate('Quiz', { cards });
  };

  render() {
    const { deck, cards } = this.props;

    return (
      <DeckDetail
        deck={deck}
        cards={cards}
        goToAddCard={this.goToAddCard}
        goToQuiz={() => this.goToQuiz(cards)}
      />
    );
  }
}

const mapStateToProps = ({ deckState, cardState }, { navigation }) => {
  const { deckId } = navigation.state.params;

  return {
    deck: getDeck(deckId, deckState),
    cards: getDeckCards(deckId, cardState)
  };
};

export default connect(mapStateToProps)(DeckDetailContainer);
