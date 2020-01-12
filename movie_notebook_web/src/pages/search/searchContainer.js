import React from 'react';
import { connect } from 'react-redux';

import { searchMovie, selectFoundMovie } from './searchActions';
import SearchPage from './SearchPage';

const Container = (props) => <SearchPage {...props} />;

const mapStateToProps = (state) => ({
  foundMovies: state.search.list,
  selectedIndex: state.search.selectedIndex,
});

export default connect(
  mapStateToProps,
  {
    searchMovie,
    selectFoundMovie,
  },
)(Container);
