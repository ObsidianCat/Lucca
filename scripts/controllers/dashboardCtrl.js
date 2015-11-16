/**
 * Created by Lula on 10/25/2015.
 */
angular.module('luccaAdminApp').controller('dashboardController', function(CategoriesTasks,$rootScope, $scope, $http, $resource, GetData){
    $scope.menuToggleFlags = [];
    $scope.menuToggleFlags["categoriesMenu"] = false;
    //get categories for main menu
    $rootScope.categories = $rootScope.categories|| GetData.returnedData.getObject({res:'categories'}).$promise.then(function(data) {
        $rootScope.categories = data.response;
        populateMenuToggler($rootScope.categories);
    });

    //create toogle property for given category
    function populateMenuToggler(menuData){

        for(var prop in menuData) {
            if(menuData[prop].hasOwnProperty('cat_id')){
                var name = menuData[prop].idName;
                $scope.menuToggleFlags[name] = false;
            }
        }//end of for loop
    }

    $scope.getSubCategory = function (subcategoryName){
        //var currentCategory = null;
        var currentCategory = CategoriesTasks.findByProperty("idName", subcategoryName);

        //get titles from database
        GetData.returnedData.getObject({res:subcategoryName}).$promise.then(function(data) {
            currentCategory.items = data.response;
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

    //watch for changes in toogle for submenu
    $scope.$watchCollection('menuToggleFlags', function(newNames, oldNames) {
        //console.log('object updated');
        //console.log(newNames);
        //console.log(oldNames);
    });



});
