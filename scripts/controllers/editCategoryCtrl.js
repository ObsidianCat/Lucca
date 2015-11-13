/**
 * Created by Lula on 11/12/2015.
 */
angular.module('luccaAdminApp').controller('editCategoryController', function($http,$rootScope, $scope, GetData,$routeParams){
    var categoryId = $routeParams.param;
    const categoryResourcePath = 'server/resources/item.php';
    const messageWraperDOMSelector = "#edit-category-wrapper";
    $scope.param = 'categories';
    $scope.itemDataModel;
    //$scope.itemDataModel =

    //console.log("Hello");
    $scope.categoryDataModel = GetData.returnedData.getObject({res:$scope.param, id:categoryId}).$promise.then(function(data){
        $scope.categoryDataModel = data.response[0];
        console.log(data);
        console.log($scope.categoryDataModel);

    });


    $scope.updateCategory = function(categoryData){
        categoryData.id = categoryId;
        $http.put(categoryResourcePath, itemData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitItemSuccess();
                //show to user message about form submission
                $(messageWraperDOMSelector).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(messageWraperDOMSelector).text(response.data);
            });
    };
    $scope.deleteCategory = function(){
        $http.delete(categoryResourcePath+'?id='+categoryId).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $(messageWraperDOMSelector).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(messageWraperDOMSelector).text(response.data);
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