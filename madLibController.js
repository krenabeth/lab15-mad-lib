var app = angular.module("myMod");

app.controller("madLibController", function($scope, madFactory) {
	$scope.madObj = madFactory.returnObj();
});