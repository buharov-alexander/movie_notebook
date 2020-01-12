import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, useHistory } from 'react-router-dom';

import NavigationBar from 'components/header/NavigationBar';
import MoviesPage from 'pages/movies/moviesContainer';
import SearchPage from 'pages/search/searchContainer';

const styles = {
  root: {
    height: '100vh',
  },
};

const Pages = ({ classes, activePage, selectPage }) => {
  const history = useHistory();
  return (
    <div id="pages" className={classes.root}>
      <NavigationBar activePage={activePage} selectPage={(page) => selectPage(page, history)} />
      <main>
        <Switch>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(Pages);
