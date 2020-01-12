import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MovieList from 'components/movie/list/MovieList';

const styles = {
  searchText: {
    padding: '20px',
  },
};

const SearchMovieList = (props) => {
  const { foundMovies, selectFoundMovie, classes } = props;
  return (
    <div>
      <div className={classes.searchText}>
        <TextField id="search-movies" label="Search" variant="outlined" fullWidth />
      </div>
      <MovieList movies={foundMovies} selectMovie={selectFoundMovie} />
    </div>
  );
};

SearchMovieList.propTypes = {
  foundMovies: ImmutablePropTypes.list.isRequired,
  classes: PropTypes.object.isRequired,
  selectFoundMovie: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchMovieList);
