import React from 'react';
import { connect } from 'react-redux';

import {
  fetchMovieList, selectMovie, saveMovie, deleteMovie,
} from './moviesActions';
import MoviesPage from './MoviesPage';

const Container = (props) => <MoviesPage {...props} />;

const mapStateToProps = (state) => ({
  movies: state.movies.list,
  selectedIndex: state.movies.selectedIndex,
});

export default connect(
  mapStateToProps,
  {
    fetchMovieList,
    selectMovie,
    saveMovie,
    deleteMovie,
  },
)(Container);
