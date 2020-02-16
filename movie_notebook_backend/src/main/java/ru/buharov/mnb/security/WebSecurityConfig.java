package ru.buharov.mnb.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import ru.buharov.mnb.user.CustomUserDetailsService;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                    .antMatchers("/*.json",
                        "/static/js/*",
                        "/static/css/*",
                        "/user")
                    .permitAll()
                    .anyRequest()
                    .authenticated()
                .and()
                    .httpBasic()
                .and()
                    .formLogin()
                    .loginPage("/webui/login")
                    .failureUrl("/webui/login?error")
                    .permitAll()
                .and()
                    .logout()
                    .logoutUrl("/user/logout")
                    .permitAll();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth,
                                CustomUserDetailsService userDetailsService,
                                PasswordEncoder encoder) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(encoder);
    }
}