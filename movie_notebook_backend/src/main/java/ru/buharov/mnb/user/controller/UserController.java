package ru.buharov.mnb.user.controller;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
    public UserDTO getCurrentLoggedInUser() {
        return new UserDTO(userService.getCurrentLoggedInUser());
    }

    @GetMapping(path = "list")
    public List<UserDTO> getUsers() {
        return userService.getUsers().stream()
                .map(UserDTO::new)
                .collect(Collectors.toList());
    }

    @PostMapping
    public UserDTO createUser(@RequestBody CreateUserDTO createUserDTO) {
        UserEntity userEntity = userService.createUser(createUserDTO.toEntity());
        return new UserDTO(userEntity);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}