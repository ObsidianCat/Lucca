/**
 * Created by Lula on 11/7/2015.
 */
angular.module('luccaAdminApp').controller('manageItemController',
    function($http,$rootScope, $scope, $location, GetData,$routeParams){
    var itemId = $routeParams.param;
    $scope.param = 'item';
    $scope.itemDataModel;
    const ITEM_RESOURCE_PATH = 'server/resources/item.php';
    const MESSAGE_DOM_WRAPER_ERROR = "#edit-item-wrapper";
    //console.log('item controller');
    if(itemId){
        //edit existing item
        $scope.itemDataModel = GetData.returnedData.getObject({res:$scope.param, id:itemId}).$promise.then(function(data){
            $scope.itemDataModel = data.response[0];
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
                $scope.submitSuccess($scope.itemDataModel,  $scope.itemForm, response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_DOM_WRAPER_ERROR).text(response.data);
            });
    };

    $scope.updateItem = function(itemData){
        itemData.id = itemId;
        $http.put(ITEM_RESOURCE_PATH, itemData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available
                for (var i = 0; i < $rootScope.categories.length; i++) {
                    var category = $rootScope.categories[i];

                    if (category.idName === itemData.category) {
                        for (var j = 0; j < category.items.length; j++) {
                            var currentItem = category.items[j];

                            if (currentItem.item_id === itemId) {
                                currentItem.mainTitle = itemData.mainTitle;
                                break;
                            }
                        }
                    }
                }
                $scope.submitSuccess($scope.itemDataModel,  $scope.itemForm, response.data);
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

                $scope.submitSuccess($scope.itemDataModel,  $scope.itemForm, response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_DOM_WRAPER_ERROR).text(response.data);
            });
    };
});