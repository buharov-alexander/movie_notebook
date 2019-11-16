package ru.buharov.mnb.user.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.buharov.mnb.user.domain.UserEntity;
import ru.buharov.mnb.user.domain.UserRoleEnum;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class CreateUserDTO {
    private String username;
    private String password;
    private String email;

    public UserEntity toEntity() {
        return UserEntity.builder()
                .username(username)
                .password(password)
                .email(email)
                .enabled(true)
                .role(UserRoleEnum.USER)
                .build();
    }
}
