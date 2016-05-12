var app = angular.module("reddit");

app.controller("selectController", function($scope, redditService, $location){
	$scope.getPage = function(getAww){
	redditService.saveData();
	// console.log("Hello");
	$location.path("/display");
	};

});



