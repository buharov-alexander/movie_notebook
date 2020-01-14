import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MovieList from 'components/movie/list/MovieList';

const styles = {
  searchText: {
    padding: '20px 20px 0px 20px',
  },
};

const SearchMovieList = (props) => {
  const {
    foundMovies, selectFoundMovie, changeTextInSearchForm, classes,
  } = props;

  return (
    <div>
      <div className={classes.searchText}>
        <TextField
          id="search-movies"
          label="Search"
          variant="outlined"
          fullWidth
          onChange={(event) => changeTextInSearchForm(event.target.value)}
        />
      </div>
      <MovieList movies={foundMovies} selectMovie={selectFoundMovie} />
    </div>
  );
};

SearchMovieList.propTypes = {
  foundMovies: ImmutablePropTypes.list.isRequired,
  classes: PropTypes.object.isRequired,
  selectFoundMovie: PropTypes.func.isRequired,
  changeTextInSearchForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchMovieList);
