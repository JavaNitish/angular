var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/edit.html'
	
	})
    .when('/subadd/:id', {
		controller: 'SubAddController',
		templateUrl: 'views/subadd.html'
	})
    .when('/list2/:id', {
		controller: 'SubListController',
		templateUrl: 'views/list2.html'
	})
 
	.otherwise({
		redirectTo: '/'
	});
});

app.constant("FBURL", "https://iliyas.firebaseio.com/product/"); //Use the URL of your project here

