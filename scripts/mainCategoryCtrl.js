/**
 * Created by Aleosha on 06.06.2015.
 */
angular.module('luccaApp').controller('mainCategoryController', function($scope, $http, $resource, GetData, WEATHER_URL){
    $scope.categories = "";

    $scope.categories = GetData.returnedData.get({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data;
    });


    $http.get(WEATHER_URL.F).
        success(function(data, status, headers, config) {
            $scope.weather = data;
            console.log($scope.weather);
        }).
        error(function(data, status, headers, config) {
            // log error
            // });
     });

    setWeather = function(weatherData){

    }

});
