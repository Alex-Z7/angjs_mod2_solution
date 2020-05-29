(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var tobuylist = this;

        tobuylist.items = ShoppingListCheckOffService.tobuylist;

        tobuylist.moveItem = function (itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex);
        };
        // tobuylist.itemName = "";
        // tobuylist.itemQuantity = "";
        //
        // tobuylist.addItem = function () {
        //     ShoppingListCheckOffService.addItem(tobuylist.itemName, tobuylist.itemQuantity);
        // }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtlist = this;

        boughtlist.items = ShoppingListCheckOffService.getItems();

    }


    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        service.tobuylist = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            },
            {
                name: "Beer",
                quantity: "12 pack"
            }
        ];

        service.boughtlist = [];

        service.moveItem = function (itemIndex) {
            var item = service.tobuylist[itemIndex];
            service.boughtlist.push(item);
            service.tobuylist.splice(itemIndex, 1);
        };


        service.getItems = function () {
            return service.boughtlist;
        };
    }

})();
