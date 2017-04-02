define([
    "angular",
    "./multi-select/multi-select-module",
    "./navigation/navigation-module",
], function(
    angular, 
    MultiselectModule,
    NavigationModule
) {

    var ComponentsModule = angular.module("components", [
        MultiselectModule.name,
        NavigationModule.name
    ]);

    return ComponentsModule;
});