angular.module('plunker', ['ui.bootstrap']);

var testController = ['$scope', '$http',
  function($scope, $http) {

    $scope.status = 'loading...';
    $scope.country = "Select Country";
    $scope.data = {
        "locations": {}
    };

    //load JSON data
    $http.get('country.json')
      .then(function(res) {
        $scope.data.locations.countries = res.data;
        $scope.status = "loaded "+$scope.data.locations.countries.length+" countries.";
        $scope.$apply();
      });


  }
];