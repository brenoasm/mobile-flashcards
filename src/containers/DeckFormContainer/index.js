import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getDeckFormProperties } from '../../selectors/deckSelector';
import { submitDeck } from '../../actions/deckAction';

class DeckFormContainer extends Component {
  render() {
    const { formProperties, onSubmit, children } = this.props;

    return (
      <Fragment>
        {formProperties &&
          Object.keys(formProperties).length > 0 &&
          React.cloneElement(children, {
            formProperties: formProperties,
            onSubmit
          })}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ deckState }) => ({
  formProperties: getDeckFormProperties(deckState)
});

const mapDispatchToProps = (dispatch, { navigate }) => ({
  onSubmit: propertiesToSubmit =>
    dispatch(submitDeck(propertiesToSubmit, navigate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckFormContainer);
