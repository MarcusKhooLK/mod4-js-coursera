(function (){
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController)

    ItemsController.$inject = ['items']
    function ItemsController(items) {
        const ctrl = this;
        ctrl.items = items;
    }
})();