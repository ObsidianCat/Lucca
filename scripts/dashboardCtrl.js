/**
 * Created by Lula on 10/25/2015.
 */
angular.module('luccaAdminApp').controller('dashboardController', function($scope, $http, $resource, GetData){
    $scope.categories = "";
    $scope.categories = GetData.returnedData.get({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data;
    });

});
