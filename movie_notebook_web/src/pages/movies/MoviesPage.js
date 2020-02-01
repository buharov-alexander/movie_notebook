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

  openDetails = (movie, index) => {
    const { selectMovie, history, selectPage } = this.props;
    selectMovie(index);
    selectPage(GET_MOVIE_DETAILS_PAGE(movie.tmdbId), history);
  }

  render() {
    const {
      movies, selectedIndex, saveMovie, deleteMovie,
    } = this.props;

    return (
      <MasterDetails
        MasterType={MasterMovie}
        masterProps={{ movies, selectedIndex, selectMovie: this.openDetails }}
        DetailsType={MovieDetails}
        detailsProps={{ movie: movies.get(selectedIndex), saveMovie, deleteMovie }}
      />
    );
  }
}

MoviesPage.defaultProps = {
  selectedIndex: null,
};

MoviesPage.propTypes = {
  movies: ImmutablePropTypes.list.isRequired,
  selectedIndex: PropTypes.number,
  history: PropTypes.object.isRequired,
  fetchMovieList: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default withRouter(MoviesPage);
