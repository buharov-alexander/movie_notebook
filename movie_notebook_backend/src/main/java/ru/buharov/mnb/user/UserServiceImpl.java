package ru.buharov.mnb.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.buharov.mnb.common.ValidatorUtil;
import ru.buharov.mnb.user.domain.UserEntity;

@Service
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
    @Transactional
    public UserEntity createUser(UserEntity userEntity) {
        ValidatorUtil.validate(userEntity);

        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setEnabled(true);
        return userDAO.save(userEntity);
    }
}
