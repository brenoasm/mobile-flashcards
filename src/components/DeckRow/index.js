import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../theme';

const propTypes = {
  deck: PropTypes.object,
  onPress: PropTypes.func
};

const defaultProps = {
  deck: null,
  onPress: () => {}
};

const DeckRow = ({ deck, onPress }) => {
  console.log('THEME===', theme)
  return (
    <Fragment>
      {deck && (
        <TouchableOpacity
          style={[theme.cardStyle, styles.card]}
          onPress={() => onPress(deck)}>
          <View style={[styles.cardContent]}>
            <Text style={styles.title}>{deck.title}</Text>
            <View style={styles.cardCountContainer}>
              <MaterialCommunityIcons
                style={styles.cardCountIcon}
                name="cards"
                size={20}
              />
              <Text style={styles.cardCountText}>{deck.cards.length}</Text>
            </View>
          </View>
          <MaterialCommunityIcons
            style={[theme.cardMenuStyle, styles.cardArrow]}
            name="arrow-right"
            size={35}
          />
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 85,
    marginBottom: 3,
    marginTop: 3,
    backgroundColor: theme.white,
    borderBottomWidth: 2,
    borderRadius: 5
  },
  cardContent: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5
  },
  cardCountContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardCountText: {
    paddingLeft: 5,
    fontSize: 18,
    textAlign: 'center',
    color: theme.black
  },
  cardCountIcon: {
    color: theme.black
  },
  cardArrow: {
    top: 25,
    color: theme.black
  },
  title: {
    fontSize: 30,
    color: theme.black
  }
});

DeckRow.propTypes = propTypes;
DeckRow.defaultProps = defaultProps;

export default DeckRow;
