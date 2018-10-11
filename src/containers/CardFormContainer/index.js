import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { getFormProperties } from "../../selectors/cardSelector";
import { submit } from "../../actions/cardAction";

class CardFormContainer extends Component {
  state = {
    formProperties: {}
  };

  componentDidMount() {
    const { deckId, formProperties } = this.props;

    const parsedProperties = Object.keys(formProperties).reduce(
      (newObj, propName) => {
        const prop = formProperties[propName];

        return {
          ...newObj,
          [propName]: {
            ...prop,
            value: propName === "belongingDeckId" ? deckId : prop.value
          }
        };
      },
      {}
    );

    this.setState({
      formProperties: parsedProperties
    });
  }

  render() {
    const { children, onSubmit } = this.props;
    const { formProperties } = this.state;

    return (
      <Fragment>
        {formProperties &&
          Object.keys(formProperties).length > 0 &&
          React.cloneElement(children, {
            formProperties: formProperties,
            onSubmit
          })}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ cardState }) => ({
  formProperties: getFormProperties(cardState)
});

const mapDispatchToProps = (dispatch, { navigate }) => ({
  onSubmit: propertiesToSubmit => dispatch(submit(propertiesToSubmit, navigate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormContainer);
