define([
    "angular",
    "./multi-select/multi-select-module"
], function(angular, MultiselectModule) {

    var ComponentsModule = angular.module("components", [
        MultiselectModule.name
    ]);

    return ComponentsModule;
});