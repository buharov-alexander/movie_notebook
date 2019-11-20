package ru.buharov.mnb.user;

import java.util.List;
import ru.buharov.mnb.user.domain.UserEntity;

public interface UserService {

    String getCurrentLoggedInUsername();

    UserEntity getCurrentLoggedInUser();

    List<UserEntity> getUsers();

    UserEntity createUser(UserEntity userEntity);

    void deleteUser(Long id);
}
