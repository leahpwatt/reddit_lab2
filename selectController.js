var app = angular.module("reddit");

app.controller("selectController", function($scope, redditService, $location){
	$scope.getPage = function(getAww){
	redditService.chooseSubReddit(getAww);
	// console.log(getAww);
	$location.path("/display");
	};

});



