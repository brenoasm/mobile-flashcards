import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setLocalNotification,
  clearLocalNotification
} from '../../utils/storage';

import App from '../../components/App';

class AppContainer extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification());
  }

  render() {
    return <App {...this.props} />;
  }
}

mapStateToProps = state => ({
  loading: false
});

export default connect(mapStateToProps)(AppContainer);
