import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from 'components/routes/PrivateRoute';
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
    return (
      <div>
        <ThemeProvider theme={theme}>{this.renderContent()}</ThemeProvider>
      </div>
    );
  }

  renderContent = () => {
    return routes.map(route => {
      if (route.private) {
        return <PrivateRoute key={route.path} {...route} />;
      }
      return <Route key={route.path} {...route} />;
    });
  };
}

export default App;
