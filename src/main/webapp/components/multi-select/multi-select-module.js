define([
    "angular",
    "./multi-select-directive",
    "./multi-select-controller"
], function(angular, MultiselectDirective, MultiselectController) {

    var MultiselectModule = angular.module("components.multiselect", []);

    //MultiselectModule.controller(MultiselectController.getName(), MultiselectController);
    MultiselectModule.directive(MultiselectDirective.getName(), MultiselectDirective);

    return MultiselectModule;
});