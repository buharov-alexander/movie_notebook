import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MovieList from 'components/movie/list/MovieList';

const styles = {
  root: {
    padding: '0px 20px 0px 20px',
  },
  searchText: {
    padding: '20px 0px 20px 0px',
  },
  list: {
    overflow: 'auto',
    height: 'calc(100vh - 180px)',
  },
};

const SearchMovieList = (props) => {
  const {
    foundMovies, selectFoundMovie, changeTextInSearchForm, classes,
  } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.searchText}>
        <TextField
          id="search-movies"
          label="Search"
          variant="outlined"
          fullWidth
          onChange={(event) => changeTextInSearchForm(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} className={classes.list}>
        <MovieList movies={foundMovies} selectMovie={selectFoundMovie} />
      </Grid>
    </Grid>
  );
};

SearchMovieList.propTypes = {
  foundMovies: ImmutablePropTypes.list.isRequired,
  classes: PropTypes.object.isRequired,
  selectFoundMovie: PropTypes.func.isRequired,
  changeTextInSearchForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchMovieList);
