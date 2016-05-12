var app = angular.module("reddit"); //referencing a module, already created, called reddit

app.factory("redditService", function($http){ //creating a service (factory is function); $http is another service that is part of angular framework

	var subReddit = ""; //creating var with empty string
	function getReddit(){ //creating function called getReddit
		return $http.get("https://www.reddit.com/r/"+subReddit+"/.json"); //get data that is at json link and returns it; subReddit refers to var in line 5
		//this function is returning an object/json 
	}


	return {
		chooseSubReddit: function(reddit){
			//choose SubReddit function is created here
			//whatever is passed is the vlue of subReddit
			subReddit = reddit;
		},

		getReddit: getReddit

	};

});


