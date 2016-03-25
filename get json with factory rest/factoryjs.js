angular.module('factorymodule',[])
.factory('myfactory', function ($http) {

    var cachedData;

    function getData(callback) {
        $http.get('http://192.168.1.5:8081/test/rest/bookservice/getcolumnname').success(function (data) {
            cachedData = data;
            callback(data);
        });

    }

    return {
        details: getData

    };
});







