/**
 * Created by Lula on 11/13/2015.
 */
angular.module('luccaAdminApp').controller('manageCategoryController', function($http,$rootScope, $scope, GetData,$routeParams){
    var categoryId = $routeParams.param;
    //console.log($routeParams.param);
    const RESOURCE_PATH = 'server/resources/categories.php';
    const MESSAGE_WRAP_DOM_SELECTOR = "#edit-category-wrapper";
    $scope.param = 'categories';
    $scope.itemDataModel;

    if(categoryId){
        //edit existing category
        $scope.categoryDataModel = GetData.returnedData.getObject({res:$scope.param, id:categoryId}).$promise.then(function(data){
            $scope.categoryDataModel = data.response[0];
            console.log(data);
            console.log($scope.categoryDataModel);

        });
    }
    else{
        //create new category
        $scope.categoryDataModel = {};
    }

    //submit new category
    $scope.createCategory = function(categoryData){
        console.log(itemData);
        $http.post(RESOURCE_PATH, categoryData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $(MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            });
    };

    $scope.updateCategory = function(categoryData){
        categoryData.id = categoryId;
        $http.put(RESOURCE_PATH, itemData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitItemSuccess();
                //show to user message about form submission
                $(MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            });
    };
    $scope.deleteCategory = function(){
        $http.delete(RESOURCE_PATH+'?id='+categoryId).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $(MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
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