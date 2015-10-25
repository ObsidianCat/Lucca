angular.module('luccaApp').controller('subCategoryController', function($scope, $http, $resource, $routeParams, GetData){
    $scope.subCategoryItems = "";
    $scope.title = $routeParams.param;
    $scope.pageTitle = $scope.title.charAt(0).toUpperCase() +$scope.title.slice(1);

    //get titles from database
    $scope.subCategoryItems = GetData.returnedData.getObject({res:$scope.title}).$promise.then(function(data) {
        $scope.subCategoryItems = data.response;
        //console.log($scope.subCategoryItems);
    });

});
