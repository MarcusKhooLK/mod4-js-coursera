(function (){
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController)

    ItemsController.$inject = ['$stateParams', 'MenuDataService']
    function ItemsController($stateParams, MenuDataService) {
        const ctrl = this;
        MenuDataService.getItemsForCategory($stateParams.categoryShortName)
        .then(function(response){
            ctrl.menuItems = response.data.menu_items;
            console.log("Menu Items: ", ctrl.menuItems)
        }) 
        .catch(function(error){
            console.error(error);
        })
    }
})();