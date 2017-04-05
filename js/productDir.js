angular.module('shopApp').directive('productDir', function() {
  return {
    templateUrl: '../views/specProdDir.html',
    restrict: 'AE',
    controller: 'shopCtrl',
    scope: {
      product: '='
    }
  }
})
