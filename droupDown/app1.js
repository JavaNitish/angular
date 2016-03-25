var app = angular.module('plunker', []);

app.controller('MainCtrl', function($http, $scope) {
  $http.get('doucment.json').success(function (data) 
  {
     $scope.testAccounts = data;
     $scope.selectedTestAccount = $scope.testAccounts[0];
  });
});
