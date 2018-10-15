import React, { Component } from "react";
import IrnForm from "irn-form";

import DeckFormContainer from '../../containers/DeckFormContainer';
import DeckForm from '../../components/DeckForm';

class DeckFormScreen extends Component {
  static navigationOptions = () => ({
    title: "New Deck"
  });

  render() {
    return (
      <DeckFormContainer navigate={this.props.navigation.navigate}>
        <IrnForm>
          <DeckForm />
        </IrnForm>
      </DeckFormContainer>
    );
  }
}

export default DeckFormScreen;
