/**
 * Created by Lula on 11/3/2015.
 */
angular.module('luccaAdminApp').controller('createItemController', function($http,$rootScope, $scope, GetData){

    $scope.test = "Hello";
    //submit new item
    $scope.createItem = function(itemData){
        console.log(itemData);
        $http.post('server/resources/item.php', itemData).
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