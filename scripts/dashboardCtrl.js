/**
 * Created by Lula on 10/25/2015.
 */
angular.module('luccaAdminApp').controller('dashboardController', function($scope, $http, $resource, GetData){
    $scope.categories = "";
    $scope.categories = GetData.returnedData.getObject({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data;
        //console.log($scope.categories);
    });

    $scope.getSubCategory = function (subcategoryName){
        //get titles from database
        $scope.categories[subcategoryName].items  = GetData.returnedData.getObject({res:subcategoryName}).$promise.then(function(data) {
            $scope.categories[subcategoryName].items = data.response;
            console.log($scope.categories);
        });
    }

});
