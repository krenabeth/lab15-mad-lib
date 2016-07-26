var app = angular.module("myMod");

app.controller('formController', function($scope, madFactory, $location) {
	$scope.submitForm = function(madLib) {
		
	madFactory.saveOject(madLib)
	// go to madLib view
	$location.path('madLib');
	};

});

	
