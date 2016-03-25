app.controller('SubListController', ['$scope', '$firebaseArray','$routeParams', '$firebaseObject', 'FBURL', function($scope, $firebaseArray,$routeParams, $firebaseObject, FBURL){
  alert("hello");
    
  var subproduct = new Firebase(FBURL+$routeParams.id+"/subproduct/");
  $scope.subproducts = $firebaseArray(subproduct);
  
  /*$scope.removeProduct = function(id) {
    var ref = new Firebase(FBURL + id);
    var product = $firebaseObject(ref)
    product.$remove();
   };*/
   
}]);

 