/**
 * Created by Lula on 11/2/2015.
 */
angular.module('luccaAdminApp')
    .config(function($routeProvider){
        $routeProvider
            .when('/add-new-item', {
                templateUrl:'html-templates/create-new-item.html',
                controller:'createItemController',
                controllerAs:'createItemCtrl'
            })
            .otherwise({redirectTo:'/'
            });
    });
