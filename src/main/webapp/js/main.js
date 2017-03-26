requirejs.config({
    baseUrl: "./js/",
    paths: {
        "angular": "../vendor/angular/angular",
        "angularAria": "../vendor/angular-aria/angular-aria",
        "angularAnimate": "../vendor/angular-animate/angular-animate",
        "angularBootstrap": "../vendor/angular-bootstrap/ui-bootstrap-tpls",
        "angularMaterial": "../vendor/angular-material/angular-material",
        "angularRoute": "../vendor/angular-route/angular-route",
        "text": "../vendor/text/text"
    },
    shim: {
        "angular" : {
            exports: "angular"
        },

        "angularAria": {
            deps: [ "angular"],
            exports: "ngAria"
        },

        "angularAnimate" : {
            deps: [ "angular" ],
            exports: "ngAnimate"
        },

        "angularBootstrap" : {
            deps: [ "angular" ],
            exports: "ngBootstrap"
        },

        "angularMaterial" : {
            deps: [ "angular", "angularAria" ],
            exports: "ngMaterial"
        },

        "angularRoute" : {
            deps: [ "angular" ],
            exports: "ngRoute"
        },

    },

    deps: [ "./app" ]
});