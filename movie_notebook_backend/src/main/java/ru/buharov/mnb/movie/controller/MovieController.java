package ru.buharov.mnb.movie.controller;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.buharov.mnb.movie.MovieService;
import ru.buharov.mnb.movie.dto.MovieDTO;

@RestController
@RequestMapping("/movie")
public class MovieController {

    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping(path = "list")
    public List<MovieDTO> getMovies() {
        return movieService.getMovies().stream()
                .map(MovieDTO::new)
                .collect(Collectors.toList());
    }

}