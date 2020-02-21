package ru.buharov.mnb.movie;

import java.util.Arrays;
import java.util.List;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import ru.buharov.mnb.movie.dto.MovieDTO;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class MovieTestUtil {
    public static void deleteMovie(Long id, MockMvc mvc) throws Exception {
        mvc.perform(delete("/movie/{id}", id).with(csrf()))
                .andExpect(status().isOk()).andReturn();
    }

    @SuppressWarnings("unchecked")
    public static List<MovieDTO> getMovieList(MockMvc mvc) throws Exception {
        MvcResult result = mvc.perform(get("/movie/list").contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();

        ObjectMapper objectMapper = new ObjectMapper();
        MovieDTO[] movieArr = objectMapper.readValue(result.getResponse().getContentAsString(), MovieDTO[].class);
        return Arrays.asList(movieArr);
    }

    public static MovieDTO getMovie(Long id, MockMvc mvc) throws Exception {
        MvcResult result = mvc.perform(get("/movie/{id}", id).contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk()).andReturn();

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(result.getResponse().getContentAsString(), MovieDTO.class);
    }
}
