var app = angular.module('myApp',['factorymodule']);
app.controller('factoryctrl',function ($scope, myfactory)
               {

    myfactory.details(function (myfactory) {

        $scope.myfactory = myfactory;
    });
});




