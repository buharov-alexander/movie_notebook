import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieList from 'components/movie/list/MovieList';

const styles = {
  root: {
    padding: '20px 20px 0px 20px',
  },
  list: {
    overflow: 'auto',
    height: 'calc(100vh - 80px)',
  },
};

const MasterMovie = (props) => {
  const { classes, ...listProps } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.list}>
        <MovieList {...listProps} />
      </Grid>
    </Grid>
  );
};

MasterMovie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MasterMovie);
