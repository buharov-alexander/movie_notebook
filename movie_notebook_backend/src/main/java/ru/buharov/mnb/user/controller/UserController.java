package ru.buharov.mnb.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.buharov.mnb.user.UserService;
import ru.buharov.mnb.user.domain.UserEntity;
import ru.buharov.mnb.user.dto.CreateUserDTO;
import ru.buharov.mnb.user.dto.UserDTO;

@RestController
@RequestMapping(path = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserDTO getCurrentLoggedInUsername() {
        return new UserDTO(userService.getCurrentLoggedInUser());
    }

    @PostMapping
    public UserDTO createUser(CreateUserDTO createUserDTO) {
        UserEntity userEntity = userService.createUser(createUserDTO.toEntity());
        return new UserDTO(userEntity);
    }
}