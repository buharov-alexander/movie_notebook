package ru.buharov.mnb.movie;

import javax.annotation.Nonnull;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import ru.buharov.mnb.movie.domain.MovieEntity;

interface MovieDAO extends CrudRepository<MovieEntity, Long> {

    @Override
    @Nonnull
    @Query("select movie from MovieEntity movie where movie.id = ?1 and movie.user.username = ?#{principal.username}")
    Optional<MovieEntity> findById(@Nonnull Long id);

    @Override
    @Nonnull
    @Query("select movie from MovieEntity movie where movie.user.username = ?#{principal.username}")
    Iterable<MovieEntity> findAll();
}
