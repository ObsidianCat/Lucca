angular.module('luccaApp').controller('itemController', function($scope, $http, $resource, $routeParams, GetData){
    $scope.item;
    $scope.param = 'testItem.json';
    $scope.activeImg = 0;
    $scope.item = GetData.returnedData.getObject({id:$scope.param}).$promise.then(function(data){
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
        console.log($scope.showHideFlags['targetName']);
        if($scope.showHideFlags['targetName']==false){
            $scope.showHideFlags['targetName']=true;
        }
        else{
            $scope.showHideFlags['targetName']=false;
        }
    }//end of show hide toggler

});
