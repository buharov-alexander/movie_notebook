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
                .username("root")
                .password("abcd")
                .role(UserRoleEnum.ADMIN)
                .email("root@mail.ru")
                .build();
        userDAO.save(rootUser);
    }

    private static void createRegularUser(UserDAO userDAO) {
        UserEntity rootUser = UserEntity.builder()
                .username("user")
                .password("abcd")
                .role(UserRoleEnum.USER)
                .email("user@mail.ru")
                .build();
        userDAO.save(rootUser);
    }
}
