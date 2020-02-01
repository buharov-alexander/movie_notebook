import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withRouter } from 'react-router-dom';

import SearchMasterMovie from 'components/movie/master/SearchMasterMovie';
import MovieDetails from 'components/movie/details/MovieDetails';
import MasterDetails from 'components/master-details/MasterDetails';
import { GET_SEARCH_DETAILS_PAGE } from 'constants/pageTypes';

class SearchPage extends PureComponent {
  changeTextInSearchForm = (text) => {
    const { tappingTimeoutId, searchMovies, setTappingTimeout } = this.props;
    if (tappingTimeoutId) {
      clearTimeout(tappingTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      searchMovies(text);
    }, 800);
    setTappingTimeout(timeoutId);
  };

  openDetails = (movie) => {
    const { history, selectPage } = this.props;
    selectPage(GET_SEARCH_DETAILS_PAGE(movie.tmdbId), history);
  };

  render() {
    const {
      selectedTmdbId, foundMovies, selectFoundMovie, saveMovie, deleteMovie,
    } = this.props;

    const masterProps = {
      movies: foundMovies,
      selectedTmdbId,
      selectMovie: this.openDetails,
      changeTextInSearchForm: this.changeTextInSearchForm,
    };

    const detailsProps = {
      movie: foundMovies.find((movie) => movie.tmdbId === selectedTmdbId),
      selectMovie: selectFoundMovie,
      saveMovie,
      deleteMovie,
    };
    return (
      <MasterDetails
        MasterType={SearchMasterMovie}
        masterProps={masterProps}
        DetailsType={MovieDetails}
        detailsProps={detailsProps}
      />
    );
  }
}

SearchPage.defaultProps = {
  selectedTmdbId: null,
};

SearchPage.propTypes = {
  foundMovies: ImmutablePropTypes.list.isRequired,
  selectedTmdbId: PropTypes.number,
  tappingTimeoutId: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  selectFoundMovie: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  setTappingTimeout: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default withRouter(SearchPage);
