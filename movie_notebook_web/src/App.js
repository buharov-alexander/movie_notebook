import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { createMuiTheme, fade } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple, lime } from '@material-ui/core/colors';
import Router from 'routing/Router';

const store = configureStore();

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime[600],
    },
    secondary: {
      main: purple[600],
      light: purple[50],
    },
    action: {
      hover: fade(purple[600], defaultTheme.palette.action.hoverOpacity),
      selected: fade(purple[600], defaultTheme.palette.action.selectedOpacity),
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
