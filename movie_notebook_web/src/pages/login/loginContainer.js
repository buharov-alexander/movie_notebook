import React from 'react';
import { connect } from 'react-redux';

import { signIn } from './loginActions';
import LoginPage from './LoginPage';

const Container = (props) => <LoginPage {...props} />;

const mapStateToProps = (state) => ({
  activePage: state.pages.activePage,
});

export default connect(
  mapStateToProps,
  { signIn },
)(Container);
