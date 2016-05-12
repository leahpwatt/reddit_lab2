var app = angular.module("reddit");

app.factory("redditService", function($http){
var subReddit = "";
	function getReddit(){
		console.log(subReddit);
		return $http.get("https://www.reddit.com/r/"+subReddit+"/.json");
	}


	return {
		chooseSubReddit: function(reddit){
			subReddit = reddit;
		},

		getReddit: getReddit

	};

});


