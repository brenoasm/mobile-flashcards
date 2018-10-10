import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardForm from '../../components/CardForm';

class CardFormContainer extends Component {
  static navigationOptions = () => ({
    title: 'New Card'
  });

  render() {
    return <CardForm />
  }
}

export default connect()(CardFormContainer);
