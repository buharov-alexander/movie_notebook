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
    margin: '20px',
  },
};

const MovieList = ({
  movies,
  onSelect,
  selectedIndex,
  classes,
}) => (
  <List className={classes.root}>
    {movies.map((movie, index) => (
      <MovieItem
        movie={movie}
        key={movie.id}
        selected={index === selectedIndex}
        onClick={() => onSelect(index)}
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
  onSelect: PropTypes.func.isRequired,
};

const MovieItem = ({ movie, selected, onClick }) => (
  <ListItem button selected={selected} onClick={onClick}>
    <ListItemText
      primary={movie.title}
      secondary={movie.originalTitle}
    />
  </ListItem>
);

MovieItem.propTypes = {
  movie: ImmutablePropTypes.recordOf(MovieRecord).isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(MovieList);
