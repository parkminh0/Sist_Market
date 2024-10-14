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
                                .securityMatcher("/api/user/api/**") // 설정된 경로로 들어오는 모든 것을 검사함
                                .authorizeHttpRequests( // 요청에 대한 권한을 지정
                                                authorizeHttpRequests -> authorizeHttpRequests
                                                                .requestMatchers("/api/user/api/reg").permitAll() // /api/member/reg
                                                                                                                  // 경로는
                                                                                                                  // 허용
                                                                .requestMatchers(HttpMethod.POST, "/api/user/api/login")
                                                                .permitAll()
                                                                .requestMatchers(HttpMethod.POST,
                                                                                "/api/user/api/logout")
                                                                .permitAll()
                                                                .requestMatchers(HttpMethod.POST, "/api/user/api/reg")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/usercount").permitAll()
                                                                .requestMatchers("/api/user/api/kakao/login")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/search_user_admin")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/mypage/userEdit")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/admin/userEdit")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/admin/getPost")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/getUserProfile")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/admin/userDel")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/admin/userEditReal")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/admin/checkUserDel")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/like/category")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/like/keyword")
                                                                .permitAll()
                                                                .requestMatchers("/api/user/api/likeLists").permitAll()
                                                                .requestMatchers("/api/user/api/buyList").permitAll()
                                                                .requestMatchers("/api/user/api/cellList").permitAll()
                                                                .requestMatchers("/api/user/api/lbiUsers").permitAll()
                                                                .requestMatchers("/api/user/api/uncheck").permitAll()
                                                                .requestMatchers("/api/user/api/chkEmail").permitAll()
                                                                .requestMatchers("/api/user/api/chkPhone").permitAll()
                                                                .requestMatchers("/api/user/delImage").permitAll()
                                                                .requestMatchers("/api/user/api/getUser").permitAll()
                                                                .requestMatchers("/api/user/api/FHRBCheck").permitAll()
                                                                .requestMatchers("/api/user/api/likeIoN").permitAll()
                                                                .requestMatchers("/api/user/api/noseeIoN").permitAll()
                                                                .requestMatchers("/api/user/api/blockIoN").permitAll()

                                                                .anyRequest().authenticated() // 나머지 모든 요청은 인증이 되어야 함
                                )
                                .csrf(csrf -> csrf.disable()) // CSRF 토큰 비활성화
                                .httpBasic(
                                                httpBasic -> httpBasic.disable()) // httpBasic로그인 방식 끄기
                                .formLogin(
                                                formLogin -> formLogin.disable()) // 폼 로그인 방식 끄기
                                .sessionManagement(
                                                sessionManagement -> sessionManagement.sessionCreationPolicy(
                                                                SessionCreationPolicy.STATELESS)) // 세션끄기
                                .addFilterBefore(JwtAuthorizationFilter,
                                                UsernamePasswordAuthenticationFilter.class);
                return http.build();
        }
}
