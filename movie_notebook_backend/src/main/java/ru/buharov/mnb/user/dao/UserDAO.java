package ru.buharov.mnb.user.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ru.buharov.mnb.user.domain.UserEntity;

@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserDAO extends CrudRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}