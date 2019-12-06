package ru.buharov.mnb.movie.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.buharov.mnb.movie.domain.MovieEntity;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class MovieDTO {

    private Long id;
    private Long tmdbId;
    private String title;
    private String originalTitle;
    private String description;
    private String posterPath;

    public MovieDTO(MovieEntity movieEntity) {
        id = movieEntity.getId();
        tmdbId = movieEntity.getTmdbId();
        title = movieEntity.getTitle();
        originalTitle = movieEntity.getOriginalTitle();
        description = movieEntity.getDescription();
        posterPath = movieEntity.getPosterPath();
    }
}
