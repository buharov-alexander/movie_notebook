package ru.buharov.mnb.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.buharov.mnb.user.domain.UserEntity;

@Repository
interface UserDAO extends CrudRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}