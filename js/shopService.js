angular.module('shopApp').service('shopService', function ($http, $stateParams) {
  this.getData = function() {
    return $http.get('http://practiceapi.devmounta.in/products').then(function(response) {
      return response.data;
    })
  }
  this.getProductInfo = function() {
    return $http.get('http://practiceapi.devmounta.in/products/' + $stateParams.id).then(function(response) {
      return response;
    })
  }
})
