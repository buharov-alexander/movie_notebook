import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { MaterialTextField } from 'components/form/forms';

const LoginForm = ({ classes }) => {
  return (
    <form className={classes.form} noValidate>
      <Field
        component={MaterialTextField}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="login"
        label="Login"
        name="login"
        autoFocus
      />
      <Field
        component={MaterialTextField}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default reduxForm({ form: 'LoginForm' })(LoginForm);
