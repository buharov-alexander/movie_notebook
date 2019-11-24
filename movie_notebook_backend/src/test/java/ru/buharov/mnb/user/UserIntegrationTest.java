package ru.buharov.mnb.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import ru.buharov.mnb.MovieNotebookApplication;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(
        classes = MovieNotebookApplication.class)
@AutoConfigureMockMvc
class UserIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void getUser_unauthorized_thenStatus401()
            throws Exception {

        mvc.perform(get("/mnb/user"))
                .andExpect(status().isUnauthorized());
    }
}
