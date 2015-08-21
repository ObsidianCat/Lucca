/**
 * Created by Aleosha on 06.06.2015.
 */
angular.module('luccaApp').controller('mainCategoryController', function($scope, $http, $resource, GetData, WEATHER_URL){
    $scope.categories = "";

    $scope.categories = GetData.returnedData.get({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data;
    });

    $scope.date = new Date();

    $http.get(WEATHER_URL.C).
        success(function(data, status, headers, config) {
            $scope.weather = data;
            console.log($scope.weather);
        }).
        error(function(data, status, headers, config) {
            // log error
            // });
     });
    $scope.weatherUnits = WEATHER_URL.cText;
    $scope.setWeather = function(weatherData){

    }

});
