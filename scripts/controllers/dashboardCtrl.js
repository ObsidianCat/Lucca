/**
 * Created by Lula on 10/25/2015.
 */
angular.module('luccaAdminApp').controller('dashboardController', function($rootScope, $scope, $http, $resource, GetData){
    $scope.menuToggleFlags = {
    };

    //get categories for main menu
    $rootScope.categories = $rootScope.categories|| GetData.returnedData.getObject({res:'mainCategories'}).$promise.then(function(data) {
        $rootScope.categories = data.response;
        //console.log($rootScope.categories);
        populateMenuToggler($rootScope.categories);
    });

    //create toogle property for given category
    function populateMenuToggler(menuData){
        for(var prop in menuData) {
            if(menuData[prop].hasOwnProperty('idName')){
                $scope.menuToggleFlags[prop] = false;
            }
        }
    }

    $scope.getSubCategory = function (subcategoryName){
        //var currentCategory = null;
        for(var i=0; i<$rootScope.categories.length; i++){
            var currentCategory =$rootScope.categories[i];
            if(currentCategory.idName == subcategoryName){
                break;
            };
        }
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
