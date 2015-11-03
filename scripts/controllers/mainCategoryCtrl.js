angular.module('luccaApp').controller('mainCategoryController', function($scope, $http, $resource, GetData, WEATHER_URL){
    $scope.categories = "";

    $scope.categories = GetData.returnedData.getObject({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data.response;
    });

    //create array of days for weather widget
    $scope.weatherDates = [];
    (function () {
        for(var i = 0; i<5; i++){
            var dates = moment().add(i, 'days').format('dddd');
            $scope.weatherDates.push(dates);
            //debugger;
        }
        $scope.weatherDates[0]="Today"
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

    };

});
