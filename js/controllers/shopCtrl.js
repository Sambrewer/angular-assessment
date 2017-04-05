angular.module('shopApp').controller('shopCtrl', function($scope, shopService) {
  $scope.test = 'working'
  $scope.getProducts = function() {
    shopService.getData().then(function(response) {
      $scope.products = response;
    })
  }
  $scope.test = false;
  $scope.getProducts();
})
