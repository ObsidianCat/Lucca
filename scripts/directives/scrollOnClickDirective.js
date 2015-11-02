/**
 * Created by Aleosha on 07.08.2015.
 */

angular.module('luccaApp').directive('scrollOnClick', function() {
    return {
        restrict: 'A',
        link: function(scope, $elm) {
            $elm.on('click', function() {
                $("body").animate({scrollTop: $elm.offset().top}, "slow");
            });
        }
    }
});
