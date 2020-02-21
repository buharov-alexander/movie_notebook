package ru.buharov.mnb.movie;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.util.Assert;
import ru.buharov.mnb.movie.dto.MovieDTO;
import ru.buharov.mnb.user.BasicIntegrationTest;

import static ru.buharov.mnb.movie.MovieTestUtil.deleteMovie;
import static ru.buharov.mnb.movie.MovieTestUtil.getMovie;
import static ru.buharov.mnb.movie.MovieTestUtil.getMovieList;
import static ru.buharov.mnb.tmdb.TmdbMovieTestUtil.saveMovie;

class MovieIntegrationTest extends BasicIntegrationTest {

    @Test
    @WithMockUser(username = USER_USERNAME)
    void saveMovie_thenCheckId_thenDelete() throws Exception {
        // check that movie is not saved
        List<MovieDTO> list = getMovieList(mvc);
        Assert.isTrue(
                list.stream().noneMatch(movie -> movie.getTmdbId().equals(TMDB_MOVIE_ID)),
                "Movie is already saved"
        );

        MovieDTO movieDTO = saveMovie(TMDB_MOVIE_ID, mvc);

        // check that movie is saved
        movieDTO = getMovie(movieDTO.getId(), mvc);
        Assert.isTrue(movieDTO.getTmdbId().equals(TMDB_MOVIE_ID), "Found movie has unexpected tmdb id");

        deleteMovie(movieDTO.getId(), mvc);

        list = getMovieList(mvc);
        Assert.isTrue(
                list.stream().noneMatch(movie -> movie.getTmdbId().equals(TMDB_MOVIE_ID)),
                "Movie was not deleted"
        );
    }

}
