/**
 * Created by lulala on 7/8/2015.
 */
angular.module('luccaApp').directive('reviewItem', function(){
        return {
            restrict:'E',
            templateUrl:'partials/review-item.html',
            controller:'reviewItemController'
        }
})