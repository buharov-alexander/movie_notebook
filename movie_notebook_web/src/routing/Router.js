import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from 'components/header/NavigationBar';
import MoviesPage from 'pages/movies/moviesContainer';

const styles = {
  root: {
    height: '100vh',
  },
};

const Router = ({ classes }) => (
  <BrowserRouter basename="/mnb/webui">
    <div id="router" className={classes.root}>
      <NavigationBar />
      <main>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </main>
    </div>
  </BrowserRouter>
);

Router.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Router);
