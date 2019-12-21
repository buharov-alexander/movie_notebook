import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MovieRecord } from 'api/movieApi';

const styles = {
  root: {
    padding: '10px',
  },
};

const MovieList = ({ movies, classes }) => (
  <List className={classes.root}>
    {movies.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
  </List>
);

MovieList.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  classes: PropTypes.object.isRequired,
};

const MovieItem = ({ movie }) => (
  <ListItem button>
    <ListItemText
      primary={movie.title}
      secondary={movie.originalTitle}
    />
  </ListItem>
);

MovieItem.propTypes = {
  movie: ImmutablePropTypes.recordOf(MovieRecord).isRequired,
};

export default withStyles(styles)(MovieList);
