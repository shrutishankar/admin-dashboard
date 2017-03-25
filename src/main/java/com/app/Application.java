package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

/**
 * To make this as the entry point and have Spring initialize the application as a web
 * application, we need to make the Application Class extend SpringBootServletInitializer Class.
 *
 * This makes Spring load this application as a web application.
 *
 * @author Ulhas Pai
 */
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
