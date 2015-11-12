/**
 * Created by Lula on 11/2/2015.
 */
angular.module('luccaAdminApp')
    .config(function($routeProvider){
        $routeProvider
            .when('/add-new-item', {
                templateUrl:'partials/create-new-item.html',
                controller:'createItemController',
                controllerAs:'createItemCtrl'
            })
            .when('/item/:param', {
                templateUrl:'partials/edit-item.html',
                controller:'editItemController',
                controllerAs:'editItemCtrl'
            })
            .when('/add-new-category', {
                templateUrl:'partials/create-category.html',
                controller:'createCategoryController',
                controllerAs:'createCategoryCtrl'
            })
            .otherwise({redirectTo:'/'
            });
    });
