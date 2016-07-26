var app = angular.module("myMod");

app.controller('formController', function($scope, madFactory, $location) {
	$scope.submitForm = function(madLib) {

	madFactory.saveOject(madLib)
	$location.path('madLib');
	};

});

	
