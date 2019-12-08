package ru.buharov.mnb.movie;

import javax.validation.constraints.NotNull;
import java.util.List;
import ru.buharov.mnb.movie.domain.MovieEntity;

public interface MovieService {
    List<MovieEntity> getMovies();

    MovieEntity getMovie(@NotNull Long id);

    MovieEntity saveMovie(MovieEntity movieEntity);

    void deleteMovie(@NotNull Long id);
}
