package ru.buharov.mnb.common.rest;

import javax.validation.ValidationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import ru.buharov.mnb.common.rest.dto.ErrorDTO;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {Throwable.class})
    protected ResponseEntity<Object> handleThrowable(Exception ex, WebRequest request) {
        return handleExceptionInternal(ex, HttpStatus.INTERNAL_SERVER_ERROR, request);
    }

    @ExceptionHandler(value = {ValidationException.class})
    protected ResponseEntity<Object> handleValidationException(Exception ex, WebRequest request) {
        return handleExceptionInternal(ex, HttpStatus.BAD_REQUEST, request);
    }

    @ExceptionHandler(value = {AccessDeniedException.class})
    protected ResponseEntity<Object> handleAccessDeniedException(Exception ex, WebRequest request) {
        return handleExceptionInternal(ex, HttpStatus.FORBIDDEN, request);
    }

    private ResponseEntity<Object> handleExceptionInternal(Exception ex, HttpStatus badRequest, WebRequest request) {
        ErrorDTO dto = new ErrorDTO(badRequest, ex.getMessage());
        return handleExceptionInternal(ex, dto, new HttpHeaders(), badRequest, request);
    }
}