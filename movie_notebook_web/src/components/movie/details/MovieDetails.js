import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MovieRecord } from 'api/movieApi';

const styles = (theme) => ({
  root: {
    minHeight: '500px',
    margin: '20px',
    backgroundColor: theme.palette.primary.light,
  },
});

const MovieDetails = ({ movie, classes }) => {
  if (!movie) {
    return null;
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

MovieDetails.defaultProps = {
  movie: null,
};

MovieDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: ImmutablePropTypes.recordOf(MovieRecord),
};

export default withStyles(styles)(MovieDetails);
