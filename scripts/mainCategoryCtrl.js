/**
 * Created by Aleosha on 06.06.2015.
 */
//var weatherDates = [];
//(function () {
//    var dates = new Date();
//    for(var i = 0; i<5; i++){
//        //var nextDay = date.setDate(date.getDate() + 1);
//        weatherDates.push(dates);
//        dates = dates.setDate(dates.getDate() + 1);
//    }
//    console.log(weatherDates);
//})();

angular.module('luccaApp').controller('mainCategoryController', function($scope, $http, $resource, GetData, WEATHER_URL){
    $scope.categories = "";

    $scope.categories = GetData.returnedData.get({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data;
    });

    //create array of days for weather widget
    $scope.weatherDates = [];
    (function () {
        for(var i = 0; i<5; i++){
            //var nextDay = date.setDate(date.getDate() + 1);

            var dates = moment().add(i, 'days').format('dddd');
            $scope.weatherDates.push(dates);
            //debugger;
        }
    })();

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
