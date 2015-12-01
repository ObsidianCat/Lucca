/**
 * Created by Lula on 10/25/2015.
 */
angular.module('luccaAdminApp').controller('dashboardController', function(CategoriesTasks,$rootScope, $scope, $http, $resource,$location, GetData){
    $scope.menuToggleFlags = [];
    $scope.menuToggleFlags["categoriesMenu"] = false;
    //get categories for main menu
    $rootScope.categories = $rootScope.categories|| reloadCategories();
    //console.log('dashboard');
    $scope.clearMessage = function(){
      $rootScope.actionMessage = null;
    };

    function reloadCategories(){
        GetData.returnedData.getObject({res:'categories'}).$promise.then(function(data) {
            $rootScope.categories = data.response;
            populateMenuToggler($rootScope.categories);
            //console.log($rootScope.categories);
        });
    }

    $scope.submitSuccess = function(dataModel, form, message){
        $rootScope.actionMessage = message;
        dataModel={};
        form.$setPristine();
        form.$setUntouched();
        form.$setSubmitted();
        $location.path('/');
    };

    //create toogle property for given category
    function populateMenuToggler(menuData){
        for(var prop in menuData) {
            if(menuData[prop].hasOwnProperty('cat_id')){
                var name = menuData[prop].idName;
                $scope.menuToggleFlags[name] = false;
            }
        }//end of for loop
    }

    /*
    get items for the category
    probably items already exist in rootCategory
     */
    $scope.getItemsForCategory = function (subcategoryName){
        //var currentCategory = null;
        var currentCategory = CategoriesTasks.findByProperty("idName", subcategoryName);
        //console.log('$rootScope.categories before');
        //console.log($rootScope.categories);
        //get titles from database
        GetData.returnedData.getObject({res:subcategoryName}).$promise.then(function(data) {
            currentCategory.items = data.response;
            //console.log('currentCategory');
            //console.log(currentCategory);
            //console.log('$rootScope.categories after');
            //console.log($rootScope.categories);

        });

        if($scope.menuToggleFlags[subcategoryName] === false){
            $scope.menuToggleFlags[subcategoryName] = true;
            //console.log($scope.menuToggleFlags);
        }
        else{
            $scope.menuToggleFlags[subcategoryName] = false;
            //console.log($scope.menuToggleFlags);
        }
    }

    $rootScope.$on('created',reloadCategories);
});
