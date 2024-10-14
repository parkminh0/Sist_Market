package com.sist.back.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class ApiSecurityConfig {

        private final JwtAuthorizationFilter JwtAuthorizationFilter;

        @Bean
        SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
                http
                                .authorizeHttpRequests(authorizeHttpRequests -> authorizeHttpRequests
                                                .anyRequest().permitAll() // 모든 요청 허용
                                )
                                .csrf(csrf -> csrf.disable()) // CSRF 토큰 비활성화
                                .httpBasic(httpBasic -> httpBasic.disable()) // httpBasic 로그인 방식 끄기
                                .formLogin(formLogin -> formLogin.disable()) // 폼 로그인 방식 끄기
                                .sessionManagement(sessionManagement -> sessionManagement
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // 세션 끄기
                                .addFilterBefore(JwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
                return http.build();
        }

}
