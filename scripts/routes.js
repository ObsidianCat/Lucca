/**
 * Created by Aleosha on 13.06.2015.
 */
angular.module('luccaApp')
.config(function($routeProvider){
        $routeProvider.when('/subcategory/:param', {
            templateUrl:'html-templates/sub-category.html',
            controller:'subCategoryController',
            controllerAs:'subCategoryCtrl'
        })
        .when('/subcategory/:param/:param', {
            templateUrl:'html-templates/sub-category.html',
            controller:'subCategoryController',
            controllerAs:'subCategoryCtrl'
        })
        .when('/',{
                templateUrl:'html-templates/main-categories.html',
                controller: 'mainCategoryController',
                controllerAs:'mainCategoryCtrl'
         })
         .otherwise({redirectTo:'/'
         });

    });