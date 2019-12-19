import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Grid from '@material-ui/core/Grid';
import MovieList from 'components/MovieList';

class MoviesPage extends PureComponent {
  componentDidMount() {
    const { fetchMovieList } = this.props;
    fetchMovieList();
  }

  render() {
    const { movies } = this.props;
    return (
      <Grid container>
        <Grid item xs={4}>
          <MovieList movies={movies} />
        </Grid>
      </Grid>
    );
  }
}

MoviesPage.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  fetchMovieList: PropTypes.func.isRequired,
};

export default MoviesPage;
