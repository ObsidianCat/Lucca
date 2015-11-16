/**
 * Created by Lula on 11/13/2015.
 */
angular.module('luccaAdminApp').controller('manageCategoryController', function($http,$rootScope, $scope, GetData,$routeParams, CategoriesTasks){
    var categoryId = $routeParams.param;
    const CAT_RESOURCE_PATH = 'server/resources/categories.php';
    const CAT_MESSAGE_WRAP_DOM_SELECTOR = "#edit-category-wrapper";
    $scope.param = 'categories';
    $scope.itemDataModel;

    function createIdName(name){
        var idName = name.toLowerCase();
        idName = idName.replace(/\s/g, "");
        return idName;
    }

    if(categoryId){
        //edit existing category
        $scope.categoryDataModel = GetData.returnedData.getObject({res:$scope.param, id:categoryId}).$promise.then(function(data){
            $scope.categoryDataModel = data.response[0];
            //console.log($scope.categoryDataModel);

        });
    }
    else{
        //create new category
        $scope.categoryDataModel = {};
    }

    //submit new category
    $scope.createCategory = function(categoryData){
        categoryData.idName = createIdName(categoryData.categoryName);

        $http.post(CAT_RESOURCE_PATH, categoryData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                //update categories object manually
                $rootScope.categories.push($scope.categoryDataModel);

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $(CAT_MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(CAT_MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            });
    };

    $scope.updateCategory = function(categoryData){
        categoryData.cat_id = categoryId;
        categoryData.idName = createIdName(categoryData.categoryName);

        $http.put(CAT_RESOURCE_PATH, categoryData).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                //update categories object manually
                var categoryIndex = CategoriesTasks.findByPropertyAndReturnRef('cat_id',categoryData.cat_id );
                $rootScope.categories[categoryIndex].categoryName = categoryData.categoryName;
                $rootScope.categories[categoryIndex].idName = categoryData.idName;
                console.log(' $rootScope.categories');
                console.log($rootScope.categories);

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $(CAT_MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(CAT_MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            });
    };
    $scope.deleteCategory = function(){
        $http.delete(CAT_RESOURCE_PATH+'?id='+categoryId).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                //update categories object manually
                var categoryIndex = CategoriesTasks.findByPropertyAndReturnRef('cat_id',categoryId);
                $rootScope.categories.splice(categoryIndex, 1);

                $scope.submitCategorySuccess();
                //show to user message about form submission
                $(CAT_MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $(CAT_MESSAGE_WRAP_DOM_SELECTOR).text(response.data);
            });
    };

    //bring form to initial state after submit
    //set form to submitted
    $scope.submitCategorySuccess = function(){
        $scope.categoryDataModel={};
        $scope.categoryForm.$setPristine();
        $scope.categoryForm.$setUntouched();
        $scope.categoryForm.$setSubmitted();
    };

});