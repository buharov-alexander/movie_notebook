package ru.buharov.mnb.user;

import org.junit.jupiter.api.Test;
import org.springframework.security.test.context.support.WithMockUser;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class UserIntegrationTest extends BasicIntegrationTest {

    @Test
    void getUser_unauthorized_thenStatus401() throws Exception {
        mvc.perform(get("/user")).andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getUser_thenGetUserData() throws Exception {
        mvc.perform(get("/user"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.username", is(USER_USERNAME)))
                .andExpect(jsonPath("$.email", is(USER_EMAIL)));
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void getUserList_userRequest_thenStatus403() throws Exception {
        mvc.perform(get("/user/list")).andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(username = ADMIN_USERNAME, authorities = {"ADMIN"})
    void getUserList_adminRequest_thenGetUsers() throws Exception {
        mvc.perform(get("/user/list"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
}
