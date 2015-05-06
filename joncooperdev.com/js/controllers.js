var app = angular.module("app", []);

app.config(function ($routeProvider){
	$routeProvider.when("/",
		{
			templateUrl: "partials/home.html",
			controller: "AppCtrl"
		}
	).when("/cutty-sark",
		{
			templateUrl: "partials/cutty-sark.html",
			controller: "AppCtrl"
		}
	).when("/nintendo", 
		{ 
			templateUrl: "partials/nintendo.html",
			controller: "AppCtrl"
		}
	).when("/live-bait", 
		{
			templateUrl: "partials/live-bait.html",
			controller: "AppCtrl"
		}
	).when("/bravely-default", 
		{
			templateUrl: "partials/bravely.html",
			controller: "AppCtrl"
		}
	).when("/mario-party", 
		{
			templateUrl: "partials/mario.html",
			controller: "AppCtrl"
		}
	).otherwise({redirectTo: '/'});
})

app.controller("AppCtrl", function($scope){
	$scope.model = {}
})