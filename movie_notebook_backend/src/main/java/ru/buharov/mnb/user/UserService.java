package ru.buharov.mnb.user;

import javax.validation.constraints.NotNull;
import java.util.List;
import ru.buharov.mnb.user.domain.UserEntity;

public interface UserService {

    String getCurrentLoggedInUsername();

    UserEntity getCurrentLoggedInUser();

    List<UserEntity> getUsers();

    UserEntity createUser(UserEntity userEntity);

    void deleteUser(@NotNull Long id);
}
