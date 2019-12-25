import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import MovieList from 'components/movie/list/MovieList';
import MovieDetails from 'components/movie/details/MovieDetails';

class MoviesPage extends PureComponent {
  componentDidMount() {
    const { fetchMovieList } = this.props;
    fetchMovieList();
  }

  renderMovieDetails = () => {
    const { movies, selectedIndex } = this.props;
    const movie = movies.get(selectedIndex);
    return movie ? <MovieDetails movie={movie} /> : null;
  }

  render() {
    const { movies, selectedIndex, selectMovie } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} md={4}>
          <MovieList
            movies={movies}
            onSelect={(index) => selectMovie(index)}
            selectedIndex={selectedIndex}
          />
        </Grid>
        <Hidden smDown>
          <Grid item md={8}>
            {this.renderMovieDetails()}
          </Grid>
        </Hidden>
      </Grid>
    );
  }
}

MoviesPage.defaultProps = {
  selectedIndex: null,
};

MoviesPage.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  selectedIndex: PropTypes.number,
  fetchMovieList: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MoviesPage;
