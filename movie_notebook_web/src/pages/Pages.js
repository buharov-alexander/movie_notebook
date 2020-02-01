import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, useHistory } from 'react-router-dom';

import NavigationBar from 'components/header/NavigationBar';
import MoviesPage from 'pages/movies/moviesContainer';
import SearchPage from 'pages/search/searchContainer';
import {
  SEARCH_PAGE, MOVIES_PAGE,
} from 'constants/pageTypes';

const styles = {
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  },
};

const Pages = ({
  classes, activePage, selectPage, pageChanged,
}) => {
  const history = useHistory();

  useEffect(
    () => {
      pageChanged(history.location.pathname);
    },
    [history.location.pathname, pageChanged],
  );

  return (
    <div id="pages" className={classes.root}>
      <NavigationBar activePage={activePage} selectPage={(page) => selectPage(page, history)} />
      <main>
        <Switch>
          <Route path={MOVIES_PAGE}>
            <MoviesPage />
          </Route>
          <Route path={SEARCH_PAGE}>
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
  pageChanged: PropTypes.func.isRequired,
};

export default withStyles(styles)(Pages);
