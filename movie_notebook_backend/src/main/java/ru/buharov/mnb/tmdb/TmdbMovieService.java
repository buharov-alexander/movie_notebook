package ru.buharov.mnb.tmdb;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import ru.buharov.mnb.movie.domain.MovieEntity;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

public interface TmdbMovieService {
    TmdbMovieDTO getTmdbMovie(@NotNull Long tmdbMovieId);

    MovieEntity saveTmdbMovie(@NotNull Long tmdbMovieId);

    List<TmdbMovieDTO> searchTmdbMovies(@NotBlank String query);
}
