package ru.buharov.mnb.user;

import java.util.Collections;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.buharov.mnb.user.domain.UserEntity;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserDAO userDAO;

    @Autowired
    public CustomUserDetailsService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userDAO.findByUsername(username);
        if (user != null) {
            return buildUser(user);
        }
        throw new UsernameNotFoundException("No user present with username: " + username);
    }

    // Converts our domain object to spring security objects
    private org.springframework.security.core.userdetails.User buildUser(UserEntity user) {
        Set<GrantedAuthority> roles = Collections.singleton(new SimpleGrantedAuthority(user.getRole().name()));
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                user.isEnabled(),
                true,
                true,
                true,
                roles);

    }
}
