package com.app.models;

import java.io.Serializable;

/**
 * A Hello World Model Class.
 *
 * @author Ulhas Pai
 */
public class Hello implements Serializable {

    private final String message;

    public Hello(final String world) {
        this.message = world;
    }

    public String getMessage() {
        return this.message;
    }
}
