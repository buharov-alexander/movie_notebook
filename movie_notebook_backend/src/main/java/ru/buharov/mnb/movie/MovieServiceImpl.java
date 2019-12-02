package ru.buharov.mnb.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.buharov.mnb.user.UserService;

@Service
class MovieServiceImpl implements MovieService {

    private UserService userService;
    private MovieDAO movieDAO;

    @Autowired
    public MovieServiceImpl(UserService userService, MovieDAO movieDAO) {
        this.userService = userService;
        this.movieDAO = movieDAO;
    }
}
