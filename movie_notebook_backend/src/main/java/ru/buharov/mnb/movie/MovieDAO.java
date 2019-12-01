package ru.buharov.mnb.movie;

import org.springframework.data.repository.CrudRepository;
import ru.buharov.mnb.movie.domain.MovieEntity;

public interface MovieDAO extends CrudRepository<MovieEntity, Long> {
}
