package ru.buharov.mnb.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MvcResult;
import ru.buharov.mnb.user.domain.UserEntity;
import ru.buharov.mnb.user.domain.UserRoleEnum;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
    void getUserList_thenCheckUserCount() throws Exception {
        checkUserCount(2);
    }

    @Test
    @WithMockUser(username = USER_USERNAME)
    void createUser_userRequest_thenStatus403() throws Exception {
        String json = createUserJson("test");
        mvc.perform(post("/user").contentType(MediaType.APPLICATION_JSON_VALUE).content(json))
                .andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(username = ADMIN_USERNAME, authorities = {"ADMIN"})
    void createUser_thenDeleteUser() throws Exception {
        String json = createUserJson("test");

        // create user
        MvcResult result = mvc.perform(post("/user").contentType(MediaType.APPLICATION_JSON_VALUE).content(json))
                .andExpect(status().isOk()).andReturn();
        checkUserCount(3);

        ObjectMapper objectMapper = new ObjectMapper();
        UserEntity createdUser = objectMapper.readValue(result.getResponse().getContentAsString(), UserEntity.class);

        // delete user
        mvc.perform(delete("/user/{id}", createdUser.getId()))
                .andExpect(status().isOk());
        checkUserCount(2);
    }

    private void checkUserCount(int expectedCount) throws Exception {
        mvc.perform(get("/user/list"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(expectedCount)));
    }

    private String createUserJson(String username) throws JsonProcessingException {
        UserEntity user = createUserEntity(username);
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(user);
    }

    private UserEntity createUserEntity(String username) {
        return UserEntity.builder()
                .username(username)
                .password(ENCODED_PASSWORD)
                .email(String.format("%s@mail.ru", username))
                .role(UserRoleEnum.USER)
                .build();
    }

}
