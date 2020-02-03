import React from 'react';
import { connect } from 'react-redux';

import LoginPage from './LoginPage';

const Container = (props) => <LoginPage {...props} />;

const mapStateToProps = (state) => ({
  activePage: state.pages.activePage,
});

export default connect(
  mapStateToProps,
  {},
)(Container);
