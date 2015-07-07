angular.module('luccaApp').controller('subCategoryController', function($scope, $http, $resource, $routeParams, GetData){
    $scope.subCategoryItems = "";
    $scope.param = $routeParams.param;

    $scope.subCategoryItems = GetData.returnedData.get({id:$scope.param}).$promise.then(function(data) {
        $scope.subCategoryItems = data;
        //console.log($scope.subCategoryItems);
    });

    //str = str.replace(/\s/g, "+");

});