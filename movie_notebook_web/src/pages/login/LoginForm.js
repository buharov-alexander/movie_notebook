import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { MaterialTextField } from 'components/form/forms';

const LoginForm = ({
  classes, signIn, handleSubmit, reset,
}) => {
  const history = useHistory();

  const submit = (values) => {
    const user = {
      username: values.login,
      password: values.password,
    };
    signIn({ ...user, history });
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(submit)}>
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
  signIn: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'LoginForm' })(LoginForm);
