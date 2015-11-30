/**
 * Created by Lula on 11/7/2015.
 */
angular.module('luccaAdminApp').controller('manageItemController', function($http,$rootScope, $scope, $location, GetData,$routeParams){
    var itemId = $routeParams.param;
    $scope.param = 'item';
    $scope.itemDataModel;
    const ITEM_RESOURCE_PATH = 'server/resources/item.php';
    const MESSAGE_DOM_WRAPER_ERROR = "#edit-item-wrapper";

    if(itemId){
        //edit existing item
        $scope.itemDataModel = GetData.returnedData.getObject({res:$scope.param, id:itemId}).$promise.then(function(data){
            $scope.itemDataModel = data.response[0];
            //console.log(data);
            //console.log($scope.itemDataModel);
        });
    }
    else{
        //create new item
        $scope.itemDataModel = {};
    }

    $scope.createItem = function(itemData){
        //console.log(itemData);
        $http.post(ITEM_RESOURCE_PATH, itemData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available
                //tell that new category created
                $rootScope.$broadcast('created', response.data);
                $scope.submitSuccess(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_DOM_WRAPER_ERROR).text(response.data);
            });
    };

    $scope.updateItem = function(itemData){
        itemData.id = itemId;
        console.log(itemData);
        $http.put(ITEM_RESOURCE_PATH, itemData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitSuccess(response.data);
                //show to user message about form submission
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_DOM_WRAPER_ERROR).text(response.data);
            });
    };
    $scope.deleteItem = function(){
        $http.delete(ITEM_RESOURCE_PATH+"?id="+itemId).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitSuccess(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_DOM_WRAPER_ERROR).text(response.data);
            });
    };

    //bring form to initial state after submit
    //set form to submitted
    $scope.submitSuccess = function(message){
        $rootScope.actionMessage = message;
        $scope.newItemModel={};
        $scope.itemForm.$setPristine();
        $scope.itemForm.$setUntouched();
        $scope.itemForm.$setSubmitted();
        $location.path('/');

    };

});