package ru.buharov.mnb.poster;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import ru.buharov.mnb.user.BasicIntegrationTest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class PosterIntegrationTest extends BasicIntegrationTest {

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getPoster_withoutPath() throws Exception {
        mvc.perform(get("/poster/SMALL"))
                .andExpect(status().isBadRequest());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getPoster_withInvalidType() throws Exception {
        mvc.perform(get("/poster/invalid?path=/9UzHx2cQgHYHrXPAiJ6G5pcG3gs.jpg"))
                .andExpect(status().isBadRequest());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getPoster_getStatus200() throws Exception {
        mvc.perform(get("/poster/SMALL?path=/9UzHx2cQgHYHrXPAiJ6G5pcG3gs.jpg"))
                .andExpect(status().isOk())
                .andExpect(header().stringValues(HttpHeaders.CONTENT_TYPE, MediaType.IMAGE_JPEG_VALUE));
    }
}
