import React from 'react';
import { connect } from 'react-redux';

import Pages from './Pages';
import { selectPage, pageChanged } from './pagesActions';

const Container = (props) => <Pages {...props} />;

const mapStateToProps = (state) => ({
  activePage: state.pages.activePage,
  username: state.login.username,
});

export default connect(
  mapStateToProps,
  {
    selectPage,
    pageChanged,
  },
)(Container);
