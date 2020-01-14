import { Record, List } from 'immutable';

export const MovieRecord = Record({
  id: undefined,
  tmdbId: undefined,
  title: undefined,
  originalTitle: undefined,
  description: undefined,
  posterPath: undefined,
});

export const getPosterPath = (movie) => (movie.posterPath ? `/mnb/poster/SMALL?path=${movie.posterPath}` : null);

export const movieListRequest = () => fetch('/mnb/movie/list')
  .then((response) => response.json())
  .then((response) => ({ movies: List(response.map((movie) => MovieRecord(movie))) }));

export const searchMovieRequest = ({ query }) => fetch(`/mnb/tmbd/movie/search?query=${query}`)
  .then((response) => response.json())
  .then((response) => ({ foundMovies: List(response.map((movie) => MovieRecord(movie))) }));
