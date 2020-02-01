import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MovieRecord, getMiddlePosterPath } from 'api/movieApi';

const styles = (theme) => ({
  root: {
    margin: '20px',
    backgroundColor: theme.palette.secondary.light,
  },
  details: {
    width: '100%',
  },
  header: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    color: theme.palette.secondary.contrastText,
  },
  subheader: {
    color: theme.palette.grey[300],
  },
  media: {
    height: '513px',
    width: '342px',
  },
  button: {
    margin: '20px',
    width: '100px',
  },
});

const getPosterCard = (movie, classes) => (
  movie.posterPath ? (
    <Hidden xsDown>
      <Box>
        <CardMedia
          image={getMiddlePosterPath(movie)}
          className={classes.media}
        />
      </Box>
    </Hidden>
  ) : null
);

const getButton = (movie, saveMovie, deleteMovie, classes) => {
  const label = movie.id ? 'Delete' : 'Save';
  const func = movie.id ? deleteMovie : saveMovie;
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={() => func(movie)}
    >
      {label}
    </Button>
  );
};

const MovieDetails = ({
  movie, selectMovie, saveMovie, deleteMovie, classes, match,
}) => {
  useEffect(
    () => {
      selectMovie(Number.parseInt(match.params.id, 10));
    },
    [match.params.id, selectMovie],
  );

  if (!movie) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <Box display="flex">
        {getPosterCard(movie, classes)}
        <Box className={classes.details}>
          <CardHeader
            title={movie.title}
            subheader={movie.originalTitle}
            className={classes.header}
            classes={{ title: classes.title, subheader: classes.subheader }}
          />
          <CardContent>
            <Typography component="p">
              {movie.description}
            </Typography>
          </CardContent>
          {getButton(movie, saveMovie, deleteMovie, classes)}
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
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  movie: ImmutablePropTypes.recordOf(MovieRecord),
  selectMovie: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default withStyles(styles)(MovieDetails);
