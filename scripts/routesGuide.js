/**
 * Created by Lula on 13.06.2015.
 */
angular.module('luccaApp')
.config(function($routeProvider){
        $routeProvider
        .when('/subcategory/history', {
            templateUrl:'html-templates/short-history.html'
        })
        .when('/subcategory/:param', {
            templateUrl:'html-templates/sub-category.html',
            controller:'subCategoryController',
            controllerAs:'subCategoryCtrl'
        })
        .when('/item/:param', {
            templateUrl:'html-templates/content-item.html',
            controller:'itemController',
            controllerAs:'itemCtrl'
        })
        .when('/',{
                templateUrl:'html-templates/main-categories.html',
                controller: 'mainCategoryController',
                controllerAs:'mainCategoryCtrl'
         })
         .otherwise({redirectTo:'/'
         });

    });