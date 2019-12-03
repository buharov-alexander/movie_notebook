package ru.buharov.mnb.tmdb;

import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;
import ru.buharov.mnb.user.BasicIntegrationTest;

import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TmdbMovieIntegrationTest extends BasicIntegrationTest {

    @Test
    void getMovie_unauthorized_thenStatus401() throws Exception {
        mvc.perform(get("/tmbd/movie/238")).andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getMovie_thenCheckId() throws Exception {
        mvc.perform(get("/tmbd/movie/238"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.tmdbId", is(238)));
    }

    @Test
    void searchMovies_unauthorized_thenStatus401() throws Exception {
        mvc.perform(get("/tmbd/movie/search")).andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void searchMovies_thenGetNotEmptyList() throws Exception {
        mvc.perform(get("/tmbd/movie/search?query=Godfather"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", not(empty())));
    }
}
