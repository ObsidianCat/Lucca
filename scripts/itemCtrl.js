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
        addReviewForm:false,
        gallery:false
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

    //$scope.reviewModel = {
    //}

    //submit review for current item
    $scope.submitReview = function(currentReview){
        currentReview.itemId =1;
        $http.post('php/review_form_proceeding.php', currentReview).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(response.data);
                $scope.reviewSuccess();
                $('.review-submit-message').text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $('.review-submit-message').text(response.data);
            });
    }
    $scope.reviewSuccess = function(){
        $scope.reviewModel={};
        $scope.reviewForm.$setPristine();
        $scope.reviewForm.$setUntouched();
        $scope.reviewForm.$setSubmitted();

    }

});
