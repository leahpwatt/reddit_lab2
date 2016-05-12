var app = angular.module("reddit");

app.factory("redditService", function($http){
	var getAww = $http.get("https://www.reddit.com/r/aww/.json");


	return {
		saveData: function(){

		}

		getData: function(){

		}

	},

});


