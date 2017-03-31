define([
    "angular",
    "./HomeController",
    "./components/components-module",

    "angularAria",
    "angularAnimate",
    "angularBootstrap",
    "angularMaterial",
    "angularRoute"
], function(angular, HomeController, ComponentsModule) {

    var app = angular.module('adminDashboard', [
       "ui.bootstrap",
       "ngMaterial",
       "ngAnimate",
       "ngRoute",
       ComponentsModule.name
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/home.html',
            controller: 'HomeController',
            controllerAs: "HomeController"
        }).otherwise({
            redirectTo: '/'
        });
    }]);

    app.controller(HomeController.getName(), [ '$scope', '$http', HomeController ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, [ app.name ]);
    });
});



