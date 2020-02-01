import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withRouter } from 'react-router-dom';

import MasterMovie from 'components/movie/master/MasterMovie';
import MovieDetails from 'components/movie/details/MovieDetails';
import MasterDetails from 'components/master-details/MasterDetails';
import { GET_MOVIE_DETAILS_PAGE } from 'constants/pageTypes';

class MoviesPage extends PureComponent {
  componentDidMount() {
    const { fetchMovieList } = this.props;
    fetchMovieList();
  }

  openDetails = (movie) => {
    const { history, selectPage } = this.props;
    selectPage(GET_MOVIE_DETAILS_PAGE(movie.tmdbId), history);
  }

  render() {
    const {
      movies, selectedTmdbId, saveMovie, deleteMovie, selectMovie,
    } = this.props;

    const detailsProps = {
      movie: movies.find((movie) => movie.tmdbId === selectedTmdbId),
      selectMovie,
      saveMovie,
      deleteMovie,
    };

    return (
      <MasterDetails
        MasterType={MasterMovie}
        masterProps={{ movies, selectedTmdbId, selectMovie: this.openDetails }}
        DetailsType={MovieDetails}
        detailsProps={detailsProps}
      />
    );
  }
}

MoviesPage.defaultProps = {
  selectedTmdbId: null,
};

MoviesPage.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  selectedTmdbId: PropTypes.number,
  history: PropTypes.object.isRequired,
  fetchMovieList: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default withRouter(MoviesPage);
