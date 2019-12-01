package ru.buharov.mnb.tmdb;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

@Service
class JsonTmdbServiceImpl implements JsonTmdbService {
    @Override
    public TmdbMovieDTO parseTmdbMovieJson(JsonNode jsonNode) {
        return null;
    }
}
