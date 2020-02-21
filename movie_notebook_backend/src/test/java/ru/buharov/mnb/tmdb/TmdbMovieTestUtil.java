package ru.buharov.mnb.tmdb;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import ru.buharov.mnb.movie.dto.MovieDTO;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TmdbMovieTestUtil {
    public static MovieDTO saveMovie(Long tmdbId, MockMvc mvc) throws Exception {
        MvcResult result = mvc.perform(post("/tmbd/movie/{tmdbId}", tmdbId)
                .contentType(MediaType.APPLICATION_JSON_VALUE).with(csrf()))
                .andExpect(status().isOk()).andReturn();

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(result.getResponse().getContentAsString(), MovieDTO.class);
    }
}
