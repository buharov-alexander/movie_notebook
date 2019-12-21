import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationBar from 'components/header/NavigationBar';
import MoviesPage from 'pages/movies/moviesContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.light,
  },
}));

const Router = () => {
  const classes = useStyles();

  return (
    <BrowserRouter basename="/mnb/webui">
      <div id="router">
        <main className={classes.root}>
          <NavigationBar />
          <Switch>
            <Route path="/movies" component={MoviesPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Router;
