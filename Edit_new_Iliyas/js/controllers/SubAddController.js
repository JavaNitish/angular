app.controller('SubAddController', ['$scope', '$firebaseArray','$routeParams', '$location', 'FBURL', function($scope, $firebaseArray,$routeParams, $location, FBURL){
	alert("working");
	$scope.subaddProduct = function() {
		var ref = new Firebase(FBURL+$routeParams.id+"/subproduct/");
		var subproduct = $firebaseArray(ref);
		subproduct.$add({
			sku: $scope.subproduct.sku,
			description: $scope.subproduct.description,
			price: $scope.subproduct.price
		});
		$location.path('/');
	};
	
}]);
