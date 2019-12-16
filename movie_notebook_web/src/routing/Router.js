import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavigationBar from 'components/header/NavigationBar';
import MoviesPage from 'pages/movies/moviesContainer';

const Router = () => (
  <BrowserRouter basename="/mnb">
    <div id="router">
      <main className="main">
        <NavigationBar />
        <Switch>
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default Router;
