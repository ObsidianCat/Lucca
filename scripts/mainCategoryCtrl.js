/**
 * Created by Aleosha on 06.06.2015.
 */
angular.module('luccaApp').controller('mainCategoryController', function($scope, $http, $resource, GetData){
    $scope.categories = "";

    $scope.categories = GetData.returnedData.get('mainCategories').$promise.then(function(data) {
        $scope.categories = data;
    });

});
