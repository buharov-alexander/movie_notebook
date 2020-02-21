package ru.buharov.mnb.user;

import javax.validation.ValidationException;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;
import com.google.common.collect.ImmutableList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import ru.buharov.mnb.common.validation.ValidatorUtil;
import ru.buharov.mnb.user.domain.UserEntity;

@Service
@Validated
@Transactional
class UserServiceImpl implements UserService {

    private final UserDAO userDAO;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String getCurrentLoggedInUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    @Override
    public UserEntity getCurrentLoggedInUser() {
        return userDAO.findByUsername(getCurrentLoggedInUsername());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @Override
    public List<UserEntity> getUsers() {
        return ImmutableList.copyOf(userDAO.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @Override
    public UserEntity createUser(UserEntity userEntity) {
        ValidatorUtil.validate(userEntity);

        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setEnabled(true);
        return userDAO.save(userEntity);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @Override
    public void deleteUser(@NotNull Long id) {
        Optional<UserEntity> user = userDAO.findById(id);
        if (!user.isPresent()) {
            throw new ValidationException(String.format("User %d cannot be found", id));
        }
        userDAO.delete(user.get());
    }
}
