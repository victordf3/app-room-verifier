import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Main from './src/Main/Main.js';

import store from './src/redux/store';

class App extends Component {
  render() {
    return <Main />;
  }
}

const InitApp = connect(state => state)(App);

export default class BeforeInit extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InitApp />
      </Provider>
    );
  }
}