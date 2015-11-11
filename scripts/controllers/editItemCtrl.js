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
        console.log(data);
        console.log($scope.itemDataModel);
    });


    $scope.updateItem = function(itemData){
        itemData.id = itemId;
        console.log(itemData);
        $http.put('server/resources/item.php', itemData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitItemSuccess();
                //show to user message about form submission
                $('#edit-item-wrapper').text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $('#edit-item-wrapper').text(response.data);
            });
    };
    $scope.deleteItem = function(){
        $http.delete('server/resources/item.php?id='+itemId).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitItemSuccess();
                //show to user message about form submission
                $('#edit-item-wrapper').text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $('#edit-item-wrapper').text(response.data);
            });
    };

    //bring form to initial state after submit
    //set form to submitted
    $scope.submitItemSuccess = function(){
        console.log('form submitted successfully');
        $scope.newItemModel={};
        $scope.itemForm.$setPristine();
        $scope.itemForm.$setUntouched();
        $scope.itemForm.$setSubmitted();
    };

});