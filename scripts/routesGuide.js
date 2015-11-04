/**
 * Created by Lula on 13.06.2015.
 */
angular.module('luccaApp')
.config(function($routeProvider){
        $routeProvider
        .when('/subcategory/history', {
            templateUrl:'partials/short-history.html'
        })
        .when('/subcategory/:param', {
            templateUrl:'partials/sub-category.html',
            controller:'subCategoryController',
            controllerAs:'subCategoryCtrl'
        })
        .when('/item/:param', {
            templateUrl:'partials/content-item.html',
            controller:'itemController',
            controllerAs:'itemCtrl'
        })
        .when('/',{
                templateUrl:'partials/main-categories.html',
                controller: 'mainCategoryController',
                controllerAs:'mainCategoryCtrl'
         })
         .otherwise({redirectTo:'/'
         });

    });