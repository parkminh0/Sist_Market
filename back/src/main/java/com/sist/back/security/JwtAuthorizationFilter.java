package com.sist.back.security;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;

@Component
@RequiredArgsConstructor
public class JwtAuthorizationFilter extends OncePerRequestFilter {
    // JWT토큰을 가지고 서버에 들어오는 요청을 허용하기 위한 인가(authorization)처리를 하는
    // Filter객체다
    @Override
    @SneakyThrows
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String requestUri = request.getRequestURI();

        // 특정 경로에 대한 필터를 적용하지 않음
        if (requestUri.startsWith("/ws-stomp") ||
                requestUri.startsWith("/sub") ||
                requestUri.startsWith("/pub") ||
                requestUri.startsWith("/api")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 토큰 검증 로직이 없는 상태로 통과
        String acessToken = "";

        if (!acessToken.isBlank()) {
            // 나중에 JWT 검증 로직을 추가
        }

        filterChain.doFilter(request, response);
    }

}
