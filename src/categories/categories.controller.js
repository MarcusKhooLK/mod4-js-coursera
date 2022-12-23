(function(){
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService']
    function CategoriesController(MenuDataService) {
        const ctrl = this;
        MenuDataService.getAllCategories()
        .then(function (response) {
            ctrl.categories = response.data;
        })
        .catch(function (error) {
            console.error(error);
        })
    }
})();