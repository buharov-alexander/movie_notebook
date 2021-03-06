package ru.buharov.mnb.tmdb;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import ru.buharov.mnb.common.service.RequestService;
import ru.buharov.mnb.movie.MovieService;
import ru.buharov.mnb.movie.domain.MovieEntity;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

@Service
@Validated
@Transactional
class TmbdMovieServiceImpl implements TmdbMovieService {

    private static final String TMDB_SERVICE_URL = "https://api.themoviedb.org/3";
    private static final String API_KEY_PARAM = "api_key=3d48f25bce5b4986324f82122df4f932";
    private static final String RU_LANG_PARAM = "&language=ru-ru";
    private static final String QUERY = "&query=";
    private static final String START_PARAM = "?" + API_KEY_PARAM + RU_LANG_PARAM;
    private static final String MOVIE = "/movie";
    private static final String SEARCH_MOVIE = "/search/movie";

    private JsonTmdbService jsonTmdbService;
    private RequestService requestService;
    private MovieService movieService;

    @Autowired
    public TmbdMovieServiceImpl(MovieService movieService, JsonTmdbService jsonTmdbService,
                                RequestService requestService) {
        this.jsonTmdbService = jsonTmdbService;
        this.requestService = requestService;
        this.movieService = movieService;
    }

    @Override
    public TmdbMovieDTO getTmdbMovie(@NotNull Long tmdbMovieId) {
        String url = TMDB_SERVICE_URL + MOVIE + "/" + tmdbMovieId + START_PARAM;
        JsonNode jsonNode = requestService.getJson(url);
        return jsonTmdbService.parseTmdbMovieJson(jsonNode);
    }

    @Override
    public MovieEntity saveTmdbMovie(@NotNull Long tmdbMovieId) {
        TmdbMovieDTO tmdbMovieDTO = getTmdbMovie(tmdbMovieId);
        MovieEntity movieEntity = MovieEntity.builder()
                .tmdbId(tmdbMovieDTO.getTmdbId())
                .title(tmdbMovieDTO.getTitle())
                .originalTitle(tmdbMovieDTO.getOriginalTitle())
                .description(tmdbMovieDTO.getDescription())
                .posterPath(tmdbMovieDTO.getPosterPath())
                .build();
        return movieService.saveMovie(movieEntity);
    }

    @Override
    public List<TmdbMovieDTO> searchTmdbMovies(@NotBlank String query) {
        query = encodeQuery(query);
        String url = TMDB_SERVICE_URL + SEARCH_MOVIE + START_PARAM + QUERY + query;
        JsonNode json = requestService.getJson(url);
        return jsonTmdbService.parseMovieListJson(json);
    }

    private String encodeQuery(String query) {
        try {
            return URLEncoder.encode(query, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new IllegalArgumentException(e);
        }
    }
}
