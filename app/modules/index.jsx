import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return <div>{this.renderContent()}</div>;
  }

  renderContent = () => {
    return routes.map((route, index) => <Route key={index} {...route} />);
  };
}

export default App;
