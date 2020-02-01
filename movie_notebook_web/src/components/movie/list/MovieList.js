import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { MovieRecord, getSmallPosterPath } from 'api/movieApi';

const styles = {
  root: {
    padding: 0,
  },
};

const MovieList = ({
  movies,
  selectMovie,
  selectedTmdbId,
  classes,
}) => (
  <List className={classes.root}>
    {movies.map((movie) => (
      <MovieItem
        movie={movie}
        key={movie.tmdbId}
        selected={movie.tmdbId === selectedTmdbId}
        selectMovie={() => selectMovie(movie)}
      />
    ))}
  </List>
);

MovieList.defaultProps = {
  selectedTmdbId: null,
};

MovieList.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  classes: PropTypes.object.isRequired,
  selectedTmdbId: PropTypes.number,
  selectMovie: PropTypes.func.isRequired,
};

const MovieItem = ({ movie, selected, selectMovie }) => (
  <ListItem button selected={selected} onClick={selectMovie}>
    <ListItemAvatar>
      <Avatar src={getSmallPosterPath(movie)}>
        {movie.originalTitle[0]}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={movie.title}
      secondary={movie.originalTitle}
    />
  </ListItem>
);

MovieItem.propTypes = {
  movie: ImmutablePropTypes.recordOf(MovieRecord).isRequired,
  selected: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default withStyles(styles)(MovieList);
