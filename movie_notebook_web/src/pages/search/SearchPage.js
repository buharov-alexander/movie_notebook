import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withRouter } from 'react-router-dom';

import SearchMasterMovie from 'components/movie/master/SearchMasterMovie';
import MovieDetails from 'components/movie/details/MovieDetails';
import MasterDetails from 'components/master-details/MasterDetails';

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

  openDetails = (movie, index) => {
    const { selectFoundMovie, history } = this.props;
    selectFoundMovie(index);
    history.push(`/search/details/${movie.tmdbId}`);
  }

  render() {
    const {
      selectedIndex, foundMovies, saveMovie, deleteMovie,
    } = this.props;

    const masterProps = {
      movies: foundMovies,
      selectedIndex,
      selectMovie: this.openDetails,
      changeTextInSearchForm: this.changeTextInSearchForm,
    };

    const detailsProps = {
      movie: foundMovies.get(selectedIndex),
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
  selectedIndex: null,
};

SearchPage.propTypes = {
  foundMovies: ImmutablePropTypes.list.isRequired,
  selectedIndex: PropTypes.number,
  tappingTimeoutId: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  selectFoundMovie: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  setTappingTimeout: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default withRouter(SearchPage);
