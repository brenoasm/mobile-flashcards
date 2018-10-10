import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../../theme';

import Button from '../Button';

const propTypes = {
  deck: PropTypes.object,
  cards: PropTypes.array
};

const defaultProps = {
  deck: null,
  cards: []
};

const DeckDetail = ({ deck, cards, goToAddCard, goToQuiz }) => (
  <Fragment>
    {deck ? (
      <View style={styles.container}>
        <View style={[styles.informationContainer, styles.center]}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardsCount}>{cards.length} card(s)</Text>
        </View>
        <View style={[styles.actionContainer, styles.center]}>
          <Button
            buttonStyle={{ marginBottom: 10 }}
            onPress={() => goToAddCard(deck.id)}
            text='Add Card'
          />
          <Button
            onPress={goToQuiz}
            text='Start Quiz'
          />
        </View>
      </View>
    ) : (
      <View style={styles.center}>
        <Text>Ops, something happened...</Text>
      </View>
    )}
  </Fragment>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.primaryColor
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: theme.white
  },
  cardsCount: {
    color: theme.white,
    fontSize: 24
  },
  actionContainer: {},
  informationContainer: {},
  button: {
    backgroundColor: theme.red,
    width: 170,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: theme.white,
    fontSize: 24
  }
});

DeckDetail.propTypes = propTypes;
DeckDetail.defaultProps = defaultProps;

export default DeckDetail;
