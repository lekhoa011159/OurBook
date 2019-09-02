import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple, green } from '@material-ui/core/colors';
import routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: green.A700 },
  },
});

class App extends Component {
  render() {
    return <ThemeProvider theme={theme}>{this.renderContent()}</ThemeProvider>;
  }

  renderContent = () => {
    return routes.map((route, index) => <Route key={index} {...route} />);
  };
}

export default App;
