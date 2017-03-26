define([
    "angular",
    "./HomeController",

    "angularAria",
    "angularAnimate",
    "angularBootstrap",
    "angularMaterial",
    "angularRoute"
], function(angular, HomeController) {

    var app = angular.module('adminDashboard', [
       "ui.bootstrap.tpls",
       "ngMaterial",
       "ngAnimate",
       'ngRoute'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/home.html',
            controller: 'HomeController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

    app.controller(HomeController.getName(), [ '$scope', '$http', HomeController ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, [ app.name ]);
    });
});



