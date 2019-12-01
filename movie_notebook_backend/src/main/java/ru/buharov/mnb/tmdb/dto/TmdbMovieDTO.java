package ru.buharov.mnb.tmdb.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class TmdbMovieDTO {
    private Long tmdbId;
    private String title;
    private String originalTitle;
    private String description;
    private String posterPath;
}
