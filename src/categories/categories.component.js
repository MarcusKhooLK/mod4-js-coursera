(function(){
    'use strict';

    angular.module('MenuApp')
    .component('categoriesComponent', {
        templateUrl: 'src/categories/categories.template.html',
        controller: CategoriesCompController,
        bindings: {
            categories: '<'
        }
    });

    function CategoriesCompController() {
        
    }
})();