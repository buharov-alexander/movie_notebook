package ru.buharov.mnb.tmdb.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.buharov.mnb.tmdb.TmdbMovieService;
import ru.buharov.mnb.tmdb.dto.TmdbMovieDTO;

@RestController
@RequestMapping("/tmbd/movie")
public class TmdbMovieController {

    private TmdbMovieService tmdbMovieService;

    public TmdbMovieController(TmdbMovieService tmdbMovieService) {
        this.tmdbMovieService = tmdbMovieService;
    }

    @GetMapping(value = "/{tmdbMovieId}")
    public TmdbMovieDTO getTmdbMovie(@PathVariable Long tmdbMovieId) {
        return tmdbMovieService.getTmdbMovie(tmdbMovieId);
    }

    @RequestMapping(value = "/search")
    public List<TmdbMovieDTO> searchTmdbMovies(@RequestParam("query") String query) {
        return tmdbMovieService.searchTmdbMovies(query);
    }
}
