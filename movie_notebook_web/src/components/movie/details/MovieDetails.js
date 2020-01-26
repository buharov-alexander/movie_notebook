import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { MovieRecord, getMiddlePosterPath } from 'api/movieApi';

const styles = (theme) => ({
  root: {
    margin: '20px',
  },
  details: {
    width: '100%',
    backgroundColor: theme.palette.secondary.light,
  },
  header: {
    backgroundColor: theme.palette.secondary.main,
  },
  media: {
    height: '513px',
    width: '342px',
  },
});

const MovieDetails = ({ movie, classes }) => {
  if (!movie) {
    return null;
  }
  return (
    <Card className={classes.root}>
      <Box display="flex">
        <Hidden xsDown>
          <Box>
            <CardMedia
              image={getMiddlePosterPath(movie)}
              className={classes.media}
            />
          </Box>
        </Hidden>
        <Box className={classes.details}>
          <CardHeader
            title={movie.title}
            subheader={movie.originalTitle}
            className={classes.header}
          />
          <CardContent>
            <Typography component="p">
              {movie.description}
            </Typography>
          </CardContent>
        </Box>
      </Box>
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
