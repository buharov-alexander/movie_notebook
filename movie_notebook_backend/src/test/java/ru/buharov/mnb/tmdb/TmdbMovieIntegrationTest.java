package ru.buharov.mnb.tmdb;

import java.util.Arrays;
import java.util.List;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.util.Assert;
import ru.buharov.mnb.movie.dto.MovieDTO;
import ru.buharov.mnb.user.BasicIntegrationTest;

import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TmdbMovieIntegrationTest extends BasicIntegrationTest {

    private static final int MOVIE_ID = 238;

    @Test
    void getMovie_unauthorized_thenStatus401() throws Exception {
        mvc.perform(get("/tmbd/movie/238")).andExpect(status().isUnauthorized());
    }

    @Test
    void searchMovies_unauthorized_thenStatus401() throws Exception {
        mvc.perform(get("/tmbd/movie/search")).andExpect(status().isUnauthorized());
    }

    @Test
    void saveMovie_unauthorized_thenStatus401() throws Exception {
        mvc.perform(post("/tmbd/movie/238").with(csrf())).andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getMovie_thenCheckId() throws Exception {
        mvc.perform(get("/tmbd/movie/238"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.tmdbId", is(MOVIE_ID)));
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void searchMovies_thenGetNotEmptyList() throws Exception {
        mvc.perform(get("/tmbd/movie/search?query=Godfather"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", not(empty())));
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void saveMovie_thenCheckId() throws Exception {
        // check that movie is not saved
        List<MovieDTO> list = getMovieList();
        Assert.isTrue(list.stream().noneMatch(movieDTO -> movieDTO.getTmdbId() == MOVIE_ID));

        mvc.perform(post("/tmbd/movie/238").with(csrf())).andExpect(status().isOk());

        // check that movie is saved
        list = getMovieList();
        Assert.isTrue(list.stream().anyMatch(movieDTO -> movieDTO.getTmdbId() == MOVIE_ID));
    }

    @SuppressWarnings("unchecked")
    private List<MovieDTO> getMovieList() throws Exception {
        MvcResult result = mvc.perform(get("/movie/list").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();

        ObjectMapper objectMapper = new ObjectMapper();
        MovieDTO[] movieArr = objectMapper.readValue(result.getResponse().getContentAsString(), MovieDTO[].class);
        return Arrays.asList(movieArr);
    }
}
