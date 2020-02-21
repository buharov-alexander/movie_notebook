package ru.buharov.mnb.tmdb;

import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
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
                .andExpect(MockMvcResultMatchers.jsonPath("$.tmdbId", is(TMDB_MOVIE_ID.intValue())));
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void searchMovies_thenGetNotEmptyList() throws Exception {
        mvc.perform(get("/tmbd/movie/search?query=Godfather"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", not(empty())));
    }
}
