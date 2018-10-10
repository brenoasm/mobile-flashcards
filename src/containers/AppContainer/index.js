import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from '../../components/App';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

mapStateToProps = state => ({
  loading: false
});

export default connect(mapStateToProps)(AppContainer);
