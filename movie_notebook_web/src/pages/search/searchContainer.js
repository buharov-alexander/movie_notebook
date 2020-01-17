import React from 'react';
import { connect } from 'react-redux';

import { TYPPING_TIMEOUT } from 'constants/actionTypes';
import { searchMovies, selectFoundMovie } from './searchActions';
import SearchPage from './SearchPage';

const Container = (props) => <SearchPage {...props} />;

const mapStateToProps = (state) => ({
  foundMovies: state.search.list,
  selectedIndex: state.search.selectedIndex,
  tappingTimeoutId: state.search.tappingTimeoutId,
});

export default connect(
  mapStateToProps,
  {
    searchMovies,
    selectFoundMovie,
    setTappingTimeout: (timeoutId) => (dispatch) => dispatch({
      type: TYPPING_TIMEOUT,
      payload: { timeoutId },
    }),
  },
)(Container);