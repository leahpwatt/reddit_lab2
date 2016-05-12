var app = angular.module("reddit");

app.controller("displayController", function($scope, redditService){
	

	redditService.getReddit().then(function(response){
		$scope.posts = response.data.data.children;
		console.log(response);		
	});


});