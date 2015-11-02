angular.module('luccaApp').controller('itemController', function($scope, $http, $resource,
                                                                 $routeParams, GetData, CENTRE_OF_LUCCA_ON_MAP){
    //console.log('$routeParams');
    var itemId = $routeParams.param;
    $scope.item;
    $scope.param = 'item';
    $scope.activeImg = 0;

    //need implementation.
    $scope.gallery = ['cathedralExterior-detail-full.jpg','cathedralExterior-full.jpg','cathedralExterior-interior-full.jpg'];
    //flags for show and hide of different page sections
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
        if(!latCor||!lngCor){
            //default value
            //center map on old lucca cathedral
            latCor: CENTRE_OF_LUCCA_ON_MAP.lat;
            lngCor: CENTRE_OF_LUCCA_ON_MAP.lng;
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

    //fetch data for the item with this specific id from the server
    $scope.item = GetData.returnedData.getObject({res:$scope.param, id:itemId}).$promise.then(function(data){
        $scope.item = data;
        showAddressOnMap();
        console.log($scope.item);
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
