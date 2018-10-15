import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

import DeckRow from '../DeckRow';
import FloatingActionButton from '../FloatingActionButton';

const propTypes = {
  decks: PropTypes.array,
  onDeckPress: PropTypes.func,
  goToDeckForm: PropTypes.func
};

const defaultProps = {
  decks: null,
  onDeckPress: () => {},
  goToDeckForm: () => {}
};

const Decks = ({ decks, onDeckPress, goToDeckForm }) => (
  <Fragment>
    <ScrollView style={{ backgroundColor: theme.primaryColor }}>
      {decks &&
        decks.map(deck => (
          <DeckRow onPress={onDeckPress} deck={deck} key={deck.id} />
        ))}
    </ScrollView>
    <FloatingActionButton onPress={goToDeckForm} />
  </Fragment>
);

Decks.propTypes = propTypes;
Decks.defaultProps = defaultProps;

export default Decks;
