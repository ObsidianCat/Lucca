/**
 * Created by Lula on 11/7/2015.
 */
angular.module('luccaAdminApp').controller('editItemController', function($http,$rootScope, $scope, GetData,$routeParams){
    var itemId = $routeParams.param;
    $scope.param = 'item';
    $scope.itemDataModel;
    //$scope.itemDataModel =

    $scope.itemDataModel = GetData.returnedData.getObject({res:$scope.param, id:itemId}).$promise.then(function(data){
        $scope.itemDataModel = data.response[0];
        //showAddressOnMap();
        console.log($scope.itemDataModel);
    });

});