import React from 'react';
import { connect } from 'react-redux';

import Pages from './Pages';
import { selectPage } from './pagesActions';

const Container = (props) => <Pages {...props} />;

const mapStateToProps = (state) => ({
  activePage: state.pages.activePage,
});

export default connect(
  mapStateToProps,
  {
    selectPage,
  },
)(Container);
