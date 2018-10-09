import React, { Component } from 'react';

import DeckDetail from '../../components/DeckDetail';

class DeckDetailContainer extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const { deckId } = navigation.state.params;

    console.log('DECK_ID===', deckId)
  }

  render() {
    return (
      <DeckDetail />
    )
  }
}

export default DeckDetailContainer;
