angular.module('luccaApp').controller('itemController', function($scope, $http, $resource, $routeParams, GetData){
    $scope.item;
    //scope.param = $routeParams.param;
    $scope.param = 'testItem.json';


    $scope.item = GetData.returnedData.getObject({id:$scope.param}).$promise.then(function(data){
        $scope.item = data;
        console.log( $scope.item);
    });


});
