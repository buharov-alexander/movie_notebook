package ru.buharov.mnb.tmdb;

import java.util.List;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

public interface TmdbMovieService {
    TmdbMovieDTO getTmdbMovie(Long tmdbMovieId);

    List<TmdbMovieDTO> searchTmdbMovies(String query);
}
