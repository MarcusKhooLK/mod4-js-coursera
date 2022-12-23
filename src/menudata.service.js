(function(){
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        const svc = this;

        svc.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
            });
        }

        svc.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${categoryShortName}.json`
            })
        }
    }
})();