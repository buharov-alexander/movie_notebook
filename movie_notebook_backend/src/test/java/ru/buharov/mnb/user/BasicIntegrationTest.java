package ru.buharov.mnb.user;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import ru.buharov.mnb.MovieNotebookApplication;
import ru.buharov.mnb.user.domain.UserEntity;
import ru.buharov.mnb.user.domain.UserRoleEnum;

@SpringBootTest(
        classes = MovieNotebookApplication.class)
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@TestPropertySource(
        locations = "classpath:application-test.properties")
public abstract class BasicIntegrationTest {

    static final String USER_USERNAME = "user";
    static final String USER_EMAIL = "user@mail.ru";
    static final String ADMIN_USERNAME = "root";
    static final String ADMIN_EMAIL = "root@mail.ru";
    private static final String ENCODED_PASSWORD = "$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae";

    private static boolean initialized;

    @Autowired
    protected MockMvc mvc;

    @BeforeAll
    static void createUsers(@Autowired UserDAO userDAO) {
        if (!initialized) {
            initialized = true;
            createRootUser(userDAO);
            createRegularUser(userDAO);
        }
    }

    private static void createRootUser(UserDAO userDAO) {
        UserEntity rootUser = UserEntity.builder()
                .username(ADMIN_USERNAME)
                .password(ENCODED_PASSWORD)
                .role(UserRoleEnum.ADMIN)
                .email(ADMIN_EMAIL)
                .build();
        userDAO.save(rootUser);
    }

    private static void createRegularUser(UserDAO userDAO) {
        UserEntity rootUser = UserEntity.builder()
                .username(USER_USERNAME)
                .password(ENCODED_PASSWORD)
                .role(UserRoleEnum.USER)
                .email(USER_EMAIL)
                .build();
        userDAO.save(rootUser);
    }
}
