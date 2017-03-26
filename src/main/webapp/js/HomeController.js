define([], function() {
    var HomeController = function($scope, $http) {
        $scope.debug = false;
        $scope.title = 'Hello ';

        $http({
            method: "GET",
            url: "./hello?name=Shruti"
        }).then(function(response){
            $scope.data = response.data;
            $scope.title += $scope.data.message;
        });

        $scope.toggleDebug = function () {
            $scope.debug = !$scope.debug;
        };
    };

    HomeController.getName = function() {
        return "HomeController";
    };

    HomeController.prototype = {
        // Add prototype methods here
    };
    
    return HomeController;
});
