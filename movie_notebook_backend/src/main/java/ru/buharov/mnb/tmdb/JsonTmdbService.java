package ru.buharov.mnb.tmdb;

import java.util.List;
import com.fasterxml.jackson.databind.JsonNode;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

public interface JsonTmdbService {
    TmdbMovieDTO parseTmdbMovieJson(JsonNode jsonNode);

    List<TmdbMovieDTO> parseMovieListJson(JsonNode jsonNode);
}
