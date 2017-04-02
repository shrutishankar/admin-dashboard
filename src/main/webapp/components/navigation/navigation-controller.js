define([
    "angular",
    "../../routes"
], function(
    angular,
    routes
){ 

    var NavigationController = function($scope, $location) {
        this._location = $location;
        this._routes = angular.copy(routes);
    };

    NavigationController.getName = function() {
        return "NavigationController";
    }

    NavigationController.prototype = {

        getRoutes: function() {
            return this._routes;
        },

        routeClicked: function(route) {
            if (route.url) {
                this._location.path(route.url);
            }
            this.toggleRoute(route);
        },

        toggleRoute: function(route) {
            if (route.childRoutes && route.childRoutes.length > 0) {
                this._routes.forEach(function(r) {
                    if (r === route) {
                        r.open = !r.open;
                    } else {
                        r.open = false;
                    }
                });
            }
            
        }
    };

    return NavigationController;
});