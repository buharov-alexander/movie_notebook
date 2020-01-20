import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withRouter } from 'react-router-dom';

import MasterMovie from 'components/movie/master/MasterMovie';
import MovieDetails from 'components/movie/details/MovieDetails';
import MasterDetails from 'components/master-details/MasterDetails';

class MoviesPage extends PureComponent {
  componentDidMount() {
    const { fetchMovieList } = this.props;
    fetchMovieList();
  }

  openDetails = (movie, index) => {
    const { selectMovie, history } = this.props;
    selectMovie(index);
    history.push(`/movies/details/${movie.id}`);
  }

  render() {
    const { movies, selectedIndex } = this.props;
    return (
      <MasterDetails
        MasterType={MasterMovie}
        masterProps={{ movies, selectedIndex, selectMovie: this.openDetails }}
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
  history: PropTypes.object.isRequired,
  fetchMovieList: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default withRouter(MoviesPage);
