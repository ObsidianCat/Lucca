/**
 * Created by Lula on 11/12/2015.
 */
angular.module('luccaAdminApp').controller('createCategoryController', function($http,$rootScope, $scope, GetData){
    //submit new item
    $scope.createCategory = function(categoryData){
        console.log(itemData);
        $http.post('server/resources/mainCategories.php', categoryData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $('#edit-category-wrapper').text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $('#edit-category-wrapper').text(response.data);
            });
    };

    //bring form to initial state after submit
    //set form to submitted
    $scope.submitCategorySuccess = function(){
        console.log('form submitted successfully');
        $scope.categoryModel={};
        $scope.categoryForm.$setPristine();
        $scope.categoryForm.$setUntouched();
        $scope.categoryForm.$setSubmitted();
    };
});