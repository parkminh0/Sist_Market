<<<<<<< HEAD
package com.sist.back.redis.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import redis.embedded.RedisServer;


@Configuration
public class EmbeddedRedisConfig {
    // @Value("${spring.data.redis.port}")
    // private int redisPort;

    // private RedisServer redisServer;

    @PostConstruct
    public void startRedisServer() {
        // redisServer = new RedisServer(redisPort);
        // redisServer.start();
    }

    @PreDestroy
    public void stopRedis() {
        // if (redisServer != null) redisServer.stop();
    }
}
=======
package com.sist.back.redis.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import redis.embedded.RedisServer;


@Configuration
public class EmbeddedRedisConfig {
    @Value("${spring.data.redis.port}")
    private int redisPort;

    private RedisServer redisServer;

    @PostConstruct
    public void startRedisServer() {
        redisServer = new RedisServer(redisPort);
        redisServer.start();
    }

    @PreDestroy
    public void stopRedis() {
        if (redisServer != null) redisServer.stop();
    }
}
>>>>>>> 8ec14e6a8b31b946a7295b51715fe74dac4d03e0
