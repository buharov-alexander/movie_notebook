package ru.buharov.mnb.poster;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import ru.buharov.mnb.tmdb.dto.PosterType;

public interface PosterService {
    byte[] getPoster(@NotNull PosterType posterType, @NotBlank String path);
}
