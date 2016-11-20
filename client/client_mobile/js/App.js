import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppNavigator from './AppNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator isSignin={this.props.isSignin}/>
    );
  }
}

const stateToProps = (state) => {
  return {
    isSignin: state.user.isSignin
  };
};

export default connect(stateToProps)(App);