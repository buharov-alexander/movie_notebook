package ru.buharov.mnb.common.validation;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.ValidationException;
import javax.validation.Validator;
import java.util.Set;
import java.util.stream.Collectors;

public class ValidatorUtil {

    private static Validator validator;

    private static <T> Set<ConstraintViolation<T>> violations(T obj) {
        return getValidator().validate(obj);
    }

    public static <T> void validate(T obj) {
        Set<ConstraintViolation<T>> violations = violations(obj);
        if (violations.isEmpty()) {
            return;
        }

        String errorMsg = violations.stream()
                .map(cv -> String.format("%s %s", cv.getPropertyPath(), cv.getMessage()))
                .collect(Collectors.joining(", "));
        throw new ValidationException(errorMsg);
    }

    private static Validator getValidator() {
        if (validator == null) {
            validator = Validation.buildDefaultValidatorFactory().getValidator();
        }
        return validator;
    }
}
