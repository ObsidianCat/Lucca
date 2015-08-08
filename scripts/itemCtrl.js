angular.module('luccaApp').controller('itemController', function($scope, $http, $resource, $routeParams,  GetData){
    $scope.item;
    $scope.param = 'item';
    $scope.activeImg = 0;
    $scope.item = GetData.returnedData.getObject({res:$scope.param, id:1}).$promise.then(function(data){
        $scope.item = data;
    });
    $scope.showHideFlags = {
        map:false,
        reviews:false,
        addReviewForm:false
    };


    $scope.setActiveImg = function($index){
        $scope.activeImg = $index;
    };

    $scope.showHideToggler = function(targetName){
        console.log($scope.showHideFlags[targetName]);
        if($scope.showHideFlags[targetName]==false){
            $scope.showHideFlags[targetName]=true;
            //$timeout(function() {
            //    $scope.jumpToLocation(targetName);
            //}, 3000);

        }
        else{
            $scope.showHideFlags[targetName]=false;
        }

        //$scope.jumpToLocation(targetName);

    }//end of show hide toggler

    //$scope.jumpToLocation = function (sectionName){
    //    $location.hash(sectionName);
    //    $anchorScroll();
    //    console.log(sectionName);
    //}

});
