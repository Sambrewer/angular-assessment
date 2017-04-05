angular.module('shopApp').controller('productDetailsCtrl', function($scope, $stateParams, shopService){

  $scope.getProductInfo = function() {
    shopService.getProductInfo().then(function(response) {
      $scope.product = response.data;
    })
  }
$scope.test = "working"
$scope.getProductInfo();
})
