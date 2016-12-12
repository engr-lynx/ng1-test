(function () {

  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {

    let buyCtrl = this;

    buyCtrl.items = ShoppingListCheckOffService.getToBuyList();

    buyCtrl.emptyItems = function () {
      return buyCtrl.items.length === 0;
    }

    buyCtrl.checkOff = function (index) {
      ShoppingListCheckOffService.checkOff(index);
    };

  }

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    let boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBoughtList();

    boughtCtrl.emptyItems = function () {
      return boughtCtrl.items.length === 0;
    }

  }

  function ShoppingListCheckOffService() {

    let service = this;

    let toBuyList = [
      { name: "French bread", quantity: 1 },
      { name: "chicken broth cubes", quantity: 10 },
      { name: "butter", quantity: 2 },
      { name: "cheese", quantity: 3 },
      { name: "chicken drumstick", quantity: 12 },
      { name: "onions", quantity: 3 },
      { name: "garlic", quantity: 5 }        
    ];

    let boughtList = [
    ];
    
    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

    service.checkOff = function (index) {
      boughtList.push( toBuyList.splice(index, 1)[0] );
    };

  }

})();