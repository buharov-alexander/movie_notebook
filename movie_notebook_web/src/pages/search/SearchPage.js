import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import SearchMovieList from 'components/movie/list/SearchMovieList';
import MovieDetails from 'components/movie/details/MovieDetails';
import MasterDetails from 'components/master-details/MasterDetails';

const SearchPage = (props) => {
  const { selectedIndex, foundMovies } = props;
  return (
    <MasterDetails
      MasterType={SearchMovieList}
      masterProps={props}
      DetailsType={MovieDetails}
      detailsProps={{ movie: foundMovies.get(selectedIndex) }}
    />
  );
};

SearchPage.defaultProps = {
  selectedIndex: null,
};

SearchPage.propTypes = {
  foundMovies: ImmutablePropTypes.list.isRequired,
  selectedIndex: PropTypes.number,
};

export default SearchPage;
