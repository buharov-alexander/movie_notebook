package ru.buharov.mnb.common.exception;

public class MnbInternalException extends RuntimeException {
    public MnbInternalException(Exception e) {
        super(e);
    }
}