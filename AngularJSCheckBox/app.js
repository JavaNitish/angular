var myApp = angular.module('myApp', []);

myApp.controller('checkBoxController', function ($scope) {
		$scope.employees=[{"Book":{"1":"idBook","2":"HostSystemId","3":"author","4":"bookName"}, "HostSystems":{"1":"idHostSystems","2":"HostSystemsName","3":"virtualMachine","4":"bookName"}, "VirtualMachine":{"1":"id","2":"name","3":"note","4":"bookName"}}];

		$scope.selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(employeeName) {
	    var idx = $scope.selection.indexOf(employeeName);

	    // is currently selected
	    if (idx > -1) {
	      $scope.selection.splice(idx, 1);
	    }

	    // is newly selected
	    else {
	      $scope.selection.push(employeeName);
	    }
	  };
});