package ru.buharov.mnb.poster.controller;

import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.buharov.mnb.poster.PosterService;
import ru.buharov.mnb.tmdb.dto.PosterType;

@RestController
@RequestMapping("/poster")
public class PosterController {

    private PosterService posterService;

    public PosterController(PosterService posterService) {
        this.posterService = posterService;
    }

    @GetMapping(value = "/{posterType}",
            produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getMoviePoster(@PathVariable PosterType posterType, @Param("path") String path) throws Exception {
        return posterService.getPoster(posterType, path);
    }
}
