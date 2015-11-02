/**
 * Created by Lula on 10/25/2015.
 */
angular.module('luccaAdminApp').controller('dashboardController', function($scope, $http, $resource, GetData){
    $scope.categories = "";
    $scope.menuToggleFlags = {
    };

    //get categories for main menu
    $scope.categories = GetData.returnedData.getObject({res:'mainCategories'}).$promise.then(function(data) {
        $scope.categories = data;
        //console.log($scope.categories);
        populateMenuToggler($scope.categories);
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
        //get titles from database
        $scope.categories[subcategoryName].items  = GetData.returnedData.getObject({res:subcategoryName}).$promise.then(function(data) {
            $scope.categories[subcategoryName].items = data.response;
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
        console.log('object updated');
        console.log(newNames);
        console.log(oldNames);

    });



});
