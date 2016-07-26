var app = angular.module("myMod");

app.factory('madFactory', function() { 
	// service logic
	var emptyObj = {};
	// function that adds inputs to object
	function saveObject(madLib){
		//set emptyObj to equal madLib the name of the object
		emptyObj = madLib;
		console.log(emptyObj);
		//whenver saveObject runs anything that pass through function is going to be stored inside of empty object
	};
	function returnObj() {
		return emptyObj; // which is now full of the inputs
	};

	return {
		saveObject: saveObject,
		returnObject: returnObject
	}
});

