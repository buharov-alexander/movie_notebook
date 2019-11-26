package ru.buharov.mnb.user;

import org.junit.jupiter.api.Test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class UserIntegrationTest extends BasicIntegrationTest {

    @Test
    void getUser_unauthorized_thenStatus401() throws Exception {

        mvc.perform(get("/mnb/user"))
                .andExpect(status().isUnauthorized());
    }
}
