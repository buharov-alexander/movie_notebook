
import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieList } from './moviesActions';
import MoviesPage from './MoviesPage';

const Container = (props) => <MoviesPage {...props} />;

const mapStateToProps = (state) => ({
  movies: state.movies.list,
});

export default connect(
  mapStateToProps,
  {
    fetchMovieList,
  },
)(Container);
