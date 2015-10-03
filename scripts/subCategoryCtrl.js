angular.module('luccaApp').controller('subCategoryController', function($scope, $http, $resource, $routeParams, GetData){
    $scope.subCategoryItems = "";

    $scope.title = $routeParams.param;
    $scope.pageTitle = $scope.title.charAt(0).toUpperCase() +$scope.title.slice(1);
    $scope.subCategoryItems = GetData.returnedData.get({res:$scope.title}).$promise.then(function(data) {
        $scope.subCategoryItems = data;
        console.log(data);
        //console.log($scope.subCategoryItems);
    });
});
