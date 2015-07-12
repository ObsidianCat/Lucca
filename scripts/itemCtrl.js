angular.module('luccaApp').controller('itemController', function($scope, $http, $resource, $routeParams, GetData){
    $scope.item;
    $scope.param = 'testItem.json';
    $scope.activeImg = 0;
    $scope.item = GetData.returnedData.getObject({id:$scope.param}).$promise.then(function(data){
        $scope.item = data;
    });

    $scope.setActiveImg = function($index){
        $scope.activeImg = $index;
    };

    //$scope.showHideToggler = fucntion(){};

});
