(function(){
    'use strict';

    angular.module('MenuApp')
    .component('itemsComponent', {
        templateUrl: 'src/items/items.template.html',
        controller: ItemsCompController,
        bindings: {
            list: '<'
        }
    });

    function ItemsCompController() {
        const ctrl = this;
    }
})();