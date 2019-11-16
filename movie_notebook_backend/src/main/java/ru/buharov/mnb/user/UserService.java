package ru.buharov.mnb.user;

import ru.buharov.mnb.user.domain.UserEntity;

public interface UserService {

    String getCurrentLoggedInUsername();
    UserEntity getCurrentLoggedInUser();
    UserEntity createUser(UserEntity userEntity);
}
