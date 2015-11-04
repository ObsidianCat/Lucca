/**
 * Created by Lula on 11/3/2015.
 */
angular.module('luccaAdminApp').controller('createItemController', function($rootScope, $scope, GetData){
    //console.log($rootScope.categories);

    //submit review for current item
    $scope.submitItem = function(itemData){
        console.log(itemData);
        //$http.post('server/create_item.php', currentReview).
        //    then(function(response) {
        //        // this callback will be called asynchronously
        //        // when the response is available
        //
        //        $scope.submitItemSuccess();
        //        //show to user message about form submission
        //        $('#create-item-wrapper').text(response.data);
        //    }, function(response) {
        //        // called asynchronously if an error occurs
        //        // or server returns response with an error status.
        //        $('#create-item-wrapper').text(response.data);
        //    });
    };

    //bring form to initial state after submit
    //set form to submitted
    $scope.submitItemSuccess = function(){
        $scope.reviewModel={};
        $scope.itemForm.$setPristine();
        $scope.itemForm.$setUntouched();
        $scope.itemForm.$setSubmitted();
    };


});