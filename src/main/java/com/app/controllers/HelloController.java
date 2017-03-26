package com.app.controllers;

import com.app.models.Hello;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Ulhas Pai
 */
@Controller
public class HelloController {

    @ResponseBody
    @RequestMapping(value = "hello", method = RequestMethod.GET)
    public Hello getHello(@RequestParam(name = "name", required = false) String name) {
        return name != null ? new Hello(name) : new Hello("World!");
    }
}
