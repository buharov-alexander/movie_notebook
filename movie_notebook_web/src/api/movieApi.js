import { Record, List } from 'immutable';
import { csrfFetch } from './utils';

export const MovieRecord = Record({
  id: undefined,
  tmdbId: undefined,
  title: undefined,
  originalTitle: undefined,
  description: undefined,
  posterPath: undefined,
});

const getPosterPath = (movie, size) => (movie.posterPath ? `/mnb/poster/${size}?path=${movie.posterPath}` : null);
export const getSmallPosterPath = (movie) => getPosterPath(movie, 'SMALL');
export const getMiddlePosterPath = (movie) => getPosterPath(movie, 'MIDDLE');

export const movieListRequest = () => fetch('/mnb/movie/list')
  .then((response) => response.json())
  .then((response) => ({ movies: List(response.map((movie) => MovieRecord(movie))) }));

export const searchMovieRequest = ({ query }) => fetch(`/mnb/tmbd/movie/search?query=${query}`)
  .then((response) => response.json())
  .then((response) => ({ foundMovies: List(response.map((movie) => MovieRecord(movie))) }));

export const saveMovieRequest = ({ tmdbId }) => csrfFetch(
  `/mnb/tmbd/movie/${tmdbId}`,
  { method: 'post' },
)
  .then((response) => response.json())
  .then((response) => ({ movie: MovieRecord(response) }));

export const deleteMovieRequest = ({ id }) => csrfFetch(
  `/mnb/movie/${id}`,
  { method: 'delete' },
)
  .then(() => id);
