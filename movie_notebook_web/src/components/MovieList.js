import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MovieRecord } from 'api/movieApi';

const MovieList = ({ movies }) => (
  <List>
    {movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
  </List>
);

MovieList.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
};

const MovieItem = ({ movie }) => (
  <ListItem button>
    <ListItemText primary={movie.title} />
  </ListItem>
);

MovieItem.propTypes = {
  movie: ImmutablePropTypes.recordOf(MovieRecord).isRequired,
};

export default MovieList;
