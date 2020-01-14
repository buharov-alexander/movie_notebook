import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { useHistory } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { MovieRecord, getPosterPath } from 'api/movieApi';

const styles = {
  root: {
    margin: '20px',
  },
};

const MovieList = ({
  movies,
  selectMovie,
  selectedIndex,
  classes,
}) => (
  <List className={classes.root}>
    {movies.map((movie, index) => (
      <MovieItem
        movie={movie}
        key={movie.tmdbId}
        selected={index === selectedIndex}
        selectMovie={() => selectMovie(index)}
      />
    ))}
  </List>
);

MovieList.defaultProps = {
  selectedIndex: null,
};

MovieList.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  classes: PropTypes.object.isRequired,
  selectedIndex: PropTypes.number,
  selectMovie: PropTypes.func.isRequired,
};

const MovieItem = ({ movie, selected, selectMovie }) => {
  const history = useHistory();
  const onClick = () => {
    selectMovie();
    history.push(`/movies/details/${movie.id}`);
  };

  return (
    <ListItem button selected={selected} onClick={onClick}>
      <ListItemAvatar>
        <Avatar src={getPosterPath(movie)} />
      </ListItemAvatar>
      <ListItemText
        primary={movie.title}
        secondary={movie.originalTitle}
      />
    </ListItem>
  );
};

MovieItem.propTypes = {
  movie: ImmutablePropTypes.recordOf(MovieRecord).isRequired,
  selected: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default withStyles(styles)(MovieList);
