var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
    $scope.q="";
    
    $scope.submit=function(){
      $scope.q= $scope.query
    }
    $scope.friends = [
    {
        id: 1,
        name: "Sarah",
        add:"ghghhj"
    },
    {
        id: 2,
        name: "Joanna",
        add:"ghghhj"
    },
    {
        id: 3,
        name: "Heather",
        add:"ghghhj"
    },
    {
        id: 4,
        name: "Kim",
        add:"ghghhj"
    }
    ];
    

});