import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { lime } from '@material-ui/core/colors';
import Router from 'routing/Router';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime[600],
      light: lime[50],
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
);

export default App;
