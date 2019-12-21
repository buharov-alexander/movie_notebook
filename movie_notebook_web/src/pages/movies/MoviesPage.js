import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
        <Grid item xs={3}>
          <MovieList
            movies={movies}
            onSelect={(index) => selectMovie(index)}
            selectedIndex={selectedIndex}
          />
        </Grid>
        <Grid item xs={9}>
          {this.renderMovieDetails()}
        </Grid>
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
