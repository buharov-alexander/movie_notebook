package ru.buharov.mnb.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import ru.buharov.mnb.common.validation.ValidatorUtil;
import ru.buharov.mnb.movie.domain.MovieEntity;
import ru.buharov.mnb.user.UserService;

@Service
@Validated
class MovieServiceImpl implements MovieService {

    private UserService userService;
    private MovieDAO movieDAO;

    @Autowired
    public MovieServiceImpl(UserService userService, MovieDAO movieDAO) {
        this.userService = userService;
        this.movieDAO = movieDAO;
    }

    @Override
    public MovieEntity saveMovie(MovieEntity movieEntity) {
        movieEntity.setUser(userService.getCurrentLoggedInUser());
        ValidatorUtil.validate(movieEntity);
        return movieDAO.save(movieEntity);
    }
}
