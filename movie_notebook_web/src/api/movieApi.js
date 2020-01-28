import { Record, List } from 'immutable';

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

export const saveMovieRequest = ({ tmdbMovieId }) => fetch(
  `/mnb/tmbd/movie/${tmdbMovieId}`,
  { method: 'post' },
)
  .then((response) => response.json())
  .then((response) => ({ movie: MovieRecord(response) }));
