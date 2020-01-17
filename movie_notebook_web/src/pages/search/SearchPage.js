import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

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

  render() {
    const {
      selectedIndex, selectFoundMovie, foundMovies,
    } = this.props;

    const masterProps = {
      foundMovies,
      selectedIndex,
      selectFoundMovie,
      changeTextInSearchForm: this.changeTextInSearchForm,
    };
    return (
      <MasterDetails
        MasterType={SearchMasterMovie}
        masterProps={masterProps}
        DetailsType={MovieDetails}
        detailsProps={{ movie: foundMovies.get(selectedIndex) }}
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
  selectFoundMovie: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
  setTappingTimeout: PropTypes.func.isRequired,
};

export default SearchPage;
