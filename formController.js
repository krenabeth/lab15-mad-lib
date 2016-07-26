var app = angular.module("myMod");

app.controller('formController', function($scope, madFactory, $location) {
	$scope.submitForm = function(madLib) {
		
	madFactory.saveObject(madLib);
	// go to madLib view
	$location.path('madLib');
	};

});

	
