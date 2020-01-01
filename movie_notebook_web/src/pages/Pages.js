import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import NavigationBar from 'components/header/NavigationBar';
import MoviesPage from 'pages/movies/moviesContainer';

const styles = {
  root: {
    height: '100vh',
  },
};

const Pages = ({ classes, activePage, selectPage }) => (
  <div id="pages" className={classes.root}>
    <NavigationBar activePage={activePage} selectPage={selectPage} />
    <main>
      <Route path="/movies">
        <MoviesPage />
      </Route>
    </main>
  </div>
);

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(Pages);
