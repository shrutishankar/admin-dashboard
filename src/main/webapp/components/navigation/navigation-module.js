define([
    "angular",
    "./navigation-directive",
], function(angular, NavigationDirective) { 
    
    var NavigationModule = angular.module("components.navigation", []);
    NavigationModule.directive(NavigationDirective.getName(), NavigationDirective);
    
    return NavigationModule;
});