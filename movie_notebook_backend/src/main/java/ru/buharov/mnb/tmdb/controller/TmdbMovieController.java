package ru.buharov.mnb.tmdb.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.buharov.mnb.tmdb.TmdbMovieService;

@RestController
@RequestMapping("/tmbd/movie")
public class TmdbMovieController {

    private TmdbMovieService tmdbMovieService;

    public TmdbMovieController(TmdbMovieService tmdbMovieService) {
        this.tmdbMovieService = tmdbMovieService;
    }
}
