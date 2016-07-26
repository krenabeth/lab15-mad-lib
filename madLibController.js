var app = angular.module("myMod");

app.controller("madLibController", function($scope, madFactory) {
	$scope.madLibObject = madFactory.returnObject();
});