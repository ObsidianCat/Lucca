/**
 * Created by lulala on 7/8/2015.
 */
angular.module('luccaApp').directive('reviewItem', function(){
        return {
            restrict:'EA',
            templateUrl:'partials/review-item.html',
            controller:'reviewItemController'
        }
})