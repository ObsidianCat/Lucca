/**
 * Created by Lula on 11/2/2015.
 */
angular.module('luccaAdminApp')
    .config(function($routeProvider){
        $routeProvider
            .when('/add-new-item', {
                templateUrl:'partials/create-new-item.html',
                controller:'manageItemController',
                controllerAs:'manageItemCtrl'
            })
            .when('/item/:param', {
                templateUrl:'partials/edit-item.html',
                controller:'manageItemController',
                controllerAs:'manageItemCtrl'
            })
            .when('/category/:param', {
                templateUrl:'partials/edit-category.html',
                controller:'manageCategoryController',
                controllerAs:'manageCategoryCtrl'
            })
            .when('/add-new-category', {
                templateUrl:'partials/create-category.html',
                controller:'manageCategoryController',
                controllerAs:'manageCategoryCtrl'
            })
            .otherwise({redirectTo:'/'
            });
    });
