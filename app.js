var app = angular.module("myMod", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/form',
	{
		templateUrl: 'form.html',
		controller: 'routeCtrl'	
	})
	.when ('/madLib',
	{
		templateUrl: 'madLib.html',
		controller: 'routeCtrl'
	})
	.otherwise({ redirectTo: '/'})
});