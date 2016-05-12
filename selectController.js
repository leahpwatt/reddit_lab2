var app = angular.module("reddit");

app.controller("selectController", function($scope, redditService, $location){
	$scope.getPage = function(){//getPage is triggered on the click of the button
		//$scope.getPage has a vlue of the input(getAww)
		redditService.chooseSubReddit($scope.getAww); // chooseSubReddit created on service.js
		$location.path("/display");
	};

});



