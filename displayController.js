var app = angular.module("reddit");

app.controller("displayController", function($scope, redditService){
	var http = this;

	redditService.then(function(response){
		http.posts = response.data.data.children;
		console.log(response);
	});
});