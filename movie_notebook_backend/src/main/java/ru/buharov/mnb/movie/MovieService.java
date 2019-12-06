package ru.buharov.mnb.movie;

import ru.buharov.mnb.movie.domain.MovieEntity;

public interface MovieService {
    MovieEntity saveMovie(MovieEntity movieEntity);
}
