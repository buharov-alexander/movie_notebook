package ru.buharov.mnb.tmdb.dto;

public enum PosterType {
    SMALL("small"),
    MIDDLE("middle");

    private String value;

    PosterType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}