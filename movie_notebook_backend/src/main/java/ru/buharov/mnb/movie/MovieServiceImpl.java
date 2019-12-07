package ru.buharov.mnb.movie;

import javax.validation.ValidationException;
import javax.validation.constraints.NotNull;
import java.util.List;
import com.google.common.collect.ImmutableList;
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
    public List<MovieEntity> getMovies() {
        return ImmutableList.copyOf(movieDAO.findAll());
    }

    @Override
    public MovieEntity getMovie(@NotNull Long id) {
        return movieDAO.findById(id)
                .orElseThrow(() -> new ValidationException(String.format("Cannot found movie %s", id)));
    }

    @Override
    public MovieEntity saveMovie(MovieEntity movieEntity) {
        movieEntity.setUser(userService.getCurrentLoggedInUser());
        ValidatorUtil.validate(movieEntity);
        return movieDAO.save(movieEntity);
    }
}
