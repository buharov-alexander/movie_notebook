package ru.buharov.mnb.poster;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.net.MalformedURLException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import ru.buharov.mnb.common.service.RequestService;
import ru.buharov.mnb.tmdb.dto.PosterType;

@Service
@Validated
@Transactional
public class PosterServiceImpl implements PosterService {

    private static final String TMDB_IMAGE_SERVICE_URL = "https://image.tmdb.org/t/p";
    private static final String TMDB_SMALL_SIZE = "/w92";
    private static final String TMDB_MIDDLE_SIZE = "/w342";
    private static final String TMDB_SMALL_POSTER_URL = TMDB_IMAGE_SERVICE_URL + TMDB_SMALL_SIZE;
    private static final String TMDB_MIDDLE_POSTER_URL = TMDB_IMAGE_SERVICE_URL + TMDB_MIDDLE_SIZE;

    private Logger log = LoggerFactory.getLogger(PosterServiceImpl.class);
    private final RequestService requestService;

    @Autowired
    public PosterServiceImpl(RequestService requestService) {
        this.requestService = requestService;
    }

    @Override
    public byte[] getPoster(@NotNull PosterType posterType, @NotBlank String posterPath) {
        try {
            String url = getUrl(posterPath, posterType);
            return requestService.getByteArray(url);
        } catch (IOException e) {
            String msg = String.format("Cannot create URL: %s", e.getMessage());
            log.error(msg, e);
            return new byte[0];
        }
    }

    private String getUrl(String posterPath, PosterType posterType) throws MalformedURLException {
        String url = PosterType.SMALL.equals(posterType) ? TMDB_SMALL_POSTER_URL : TMDB_MIDDLE_POSTER_URL;
        return url + posterPath;
    }
}
