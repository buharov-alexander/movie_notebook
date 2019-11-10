package ru.buharov.mnb.user.dao;

import org.springframework.data.repository.CrudRepository;
import ru.buharov.mnb.user.domain.UserEntity;

public interface UserDAO extends CrudRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}