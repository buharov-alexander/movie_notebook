package ru.buharov.mnb.security;

import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;
import ru.buharov.mnb.user.BasicIntegrationTest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class CsrfTests extends BasicIntegrationTest {
    @Test
    @WithMockUser(username = USER_USERNAME)
    void postRequest_thenStatus403() throws Exception {
        mvc.perform(post("/tmbd/movie/238")).andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void deleteRequest_thenStatus403() throws Exception {
        mvc.perform(delete("/movie/238")).andExpect(status().isForbidden());
    }

}
