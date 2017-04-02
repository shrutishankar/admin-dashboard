define([
    "./navigation-controller",
    "text!./navigation-template.html"
], function(
    NavigationController,
    NavigationTemplate
){ 
    var NavigationDirective = function() {
         return {
            restrict: "AE",
            scope: {},
            controller: NavigationController,
            //controller: [ "$scope", "$location", function(scope, location) { return new NavigationController(scope, location); }],
            controllerAs: NavigationController.getName(),
            bindToController: true,
            template: NavigationTemplate
        };
    };

    NavigationDirective.getName = function() {
        return "navigation";
    }

    return NavigationDirective;
});