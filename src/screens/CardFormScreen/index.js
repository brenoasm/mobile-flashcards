import React, { Component } from "react";
import IrnForm from "irn-form";

import CardFormContainer from "../../containers/CardFormContainer";
import CardForm from "../../components/CardForm";

class CardFormScreen extends Component {
  static navigationOptions = () => ({
    title: "New Card"
  });

  render() {
    const { deckId } = this.props.navigation.state.params;

    return (
      <CardFormContainer deckId={deckId} navigate={this.props.navigation.navigate}>
        <IrnForm>
          <CardForm />
        </IrnForm>
      </CardFormContainer>
    );
  }
}

export default CardFormScreen;
