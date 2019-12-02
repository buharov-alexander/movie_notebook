package ru.buharov.mnb.tmdb;

import java.util.List;
import com.fasterxml.jackson.databind.JsonNode;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Service;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

@Service
class JsonTmdbServiceImpl implements JsonTmdbService {

    @Override
    public TmdbMovieDTO parseTmdbMovieJson(JsonNode jsonNode) {
        assert jsonNode != null;

        Long tmdbId = jsonNode.at("/id").asLong();
        String title = jsonNode.at("/title").asText();
        String originalTitle = jsonNode.at("/original_title").asText();
        String description = jsonNode.at("/overview").asText();
        JsonNode posterPathNode = jsonNode.at("/poster_path");

        TmdbMovieDTO tmdbMovieDTO = TmdbMovieDTO.builder()
                .tmdbId(tmdbId)
                .title(title)
                .originalTitle(originalTitle)
                .description(description)
                .build();

        if (!posterPathNode.isMissingNode()) {
            tmdbMovieDTO.setPosterPath(posterPathNode.asText());
        }

        return tmdbMovieDTO;
    }

    @Override
    public List<TmdbMovieDTO> parseMovieListJson(JsonNode jsonNode) {
        assert jsonNode != null;

        List<TmdbMovieDTO> res = Lists.newArrayList();
        JsonNode results = jsonNode.at("/results");
        if (results.isArray()) {
            for (final JsonNode result : results) {
                res.add(parseTmdbMovieJson((result)));
            }
        }
        return res;
    }
}
