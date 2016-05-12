var app = angular.module("reddit", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",
	{
		controller: "selectController",
		templateUrl: "select.html"
	})
	.when("/display",
	{
		controller: "displayController",
		templateUrl: "display.html"
	})
	.otherwise({redirectTo: "/"});
});