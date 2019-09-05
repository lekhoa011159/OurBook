import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from 'components/routes/PrivateRoute';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple, green } from '@material-ui/core/colors';
import routes from './routes';
import { mapCookieToState } from './actions';
import saga from './saga';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[300] },
    secondary: { main: green.A700 },
  },
});

class App extends Component {
  componentDidMount() {
    this.props.mapCookieToState();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    mapCookieToState: () => {
      dispatch(mapCookieToState());
    },
  };
};

const withSaga = injectSaga({ key: 'homepage', saga });
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
)(App);
