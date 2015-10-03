angular.module('luccaApp').controller('itemController', function($scope, $http, $resource, $routeParams,  GetData){
    $scope.item;
    $scope.param = 'item';
    $scope.activeImg = 0;
    $scope.gallery = ['cathedralExterior-detail-full.jpg','cathedralExterior-full.jpg','cathedralExterior-interior-full.jpg'];
    $scope.showHideFlags = {
        map:true,
        reviews:false,
        addReviewForm:false,
        gallery:false
    };

    //objects for the map
    var map;
    var geocoder = new google.maps.Geocoder();
    //function for the map
    function initializeMap(latCor, lngCor) {
        var zoomAmount = 18;
        console.log(latCor +"   "+ lngCor);
        if(!latCor||!lngCor){
            //default value
            //center map on old lucca cathedral
            latCor: 43.842900;
            lngCor: 10.503135;
            zoomAmount = 12
        }

        var myOptions = {
            zoom: zoomAmount,
            center: {lat: latCor, lng: lngCor},
        };
        var map = new google.maps.Map(document.getElementById("map"),myOptions);

        var marker = new google.maps.Marker({
            position: {lat: latCor, lng: lngCor},
            map: map,
            title:"$scope.item.response[0].mainTitle"
        });

    }
    function showAddressOnMap() {
        geocoder.geocode({'address': $scope.item.response[0].mainTitle + " Lucca LU, Italy"}, function (results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();


                initializeMap(latitude, longitude);

            }

        });
    }


    $scope.item = GetData.returnedData.getObject({res:$scope.param, id:1}).$promise.then(function(data){
        $scope.item = data;
        showAddressOnMap();
    });

    $scope.setActiveImg = function($index){
        $scope.activeImg = $index;
    };

    $scope.showHideToggler = function(targetName){
        console.log($scope.showHideFlags[targetName]);
        if($scope.showHideFlags[targetName]==false){
            $scope.showHideFlags[targetName]=true;
        }
        else{
            $scope.showHideFlags[targetName]=false;
        }
    };//end of show hide toggler


    //submit review for current item
    $scope.submitReview = function(currentReview){
        currentReview.itemId =1;
        $http.post('php/review_form_proceeding.php', currentReview).
            then(function(response) {
                // this callback will be called asynchronously
                // when the response is available

                $scope.reviewSubmitSuccess();
                //show to user message about form submission
                $('.review-submit-message').text(response.data);
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $('.review-submit-message').text(response.data);
            });
    };

    //bring form to initial state after submit
    //set form to submitted
    $scope.reviewSubmitSuccess = function(){
        $scope.reviewModel={};
        $scope.reviewForm.$setPristine();
        $scope.reviewForm.$setUntouched();
        $scope.reviewForm.$setSubmitted();
    };

});//end of item controller
