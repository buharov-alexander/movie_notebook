import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import MasterMovie from 'components/movie/master/MasterMovie';
import MovieDetails from 'components/movie/details/MovieDetails';
import MasterDetails from 'components/master-details/MasterDetails';

class MoviesPage extends PureComponent {
  componentDidMount() {
    const { fetchMovieList } = this.props;
    fetchMovieList();
  }

  render() {
    const { movies, selectedIndex, selectMovie } = this.props;
    return (
      <MasterDetails
        MasterType={MasterMovie}
        masterProps={{ movies, selectedIndex, selectMovie }}
        DetailsType={MovieDetails}
        detailsProps={{ movie: movies.get(selectedIndex) }}
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
  fetchMovieList: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MoviesPage;
