(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig)

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/home/home.template.html'
        })
        .state('mainCategories', {
            url: '/categories',
            templateUrl: 'src/categories/main-categories.template.html',
            controller: 'CategoriesController as categoriesCtrl'
        })
        .state('mainItems', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/items/main-items.template.html',
            controller: 'ItemsController as itemsCtrl'
        })
    }
})();