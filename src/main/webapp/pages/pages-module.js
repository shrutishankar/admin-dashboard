define([
    "angular",
    "./elements/elements-controller",
    "./home/home-controller",
    "./widgets/widgets-controller"
], function(
    angular,
    ElementsController,
    HomeController,
    WidgetsController
) {

    var PagesModule = angular.module("pages", []);
    PagesModule.controller(ElementsController.getName(),ElementsController);
    PagesModule.controller(HomeController.getName(), HomeController);
    PagesModule.controller(WidgetsController.getName(), WidgetsController);

    return PagesModule;
});