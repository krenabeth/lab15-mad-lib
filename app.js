var app = angular.module("myMod", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'form.html',
		controller: 'formController'	
	})
	.when ('/madLib',
	{
		templateUrl: 'madLib.html',
		controller: 'madLibController'
	})
	.otherwise({ redirectTo: '/'})
});