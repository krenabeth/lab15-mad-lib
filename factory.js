var app = angular.module("myMod");

app.factory('madFactory', function() { 
	// service logic
	var emptyObj = {};
	// function that adds inputs to object
	function saveObject(madLib){
		//set emptyObj to equal madLib the name of the object
		emptyObj = madLib;
		//whenver saveObject runs anything that pass through function is going to be stored inside of empty object
	};
	function returnObject() {
		return madLibObject; // which is now full of the inputs
	};

// saveObject is a property with the value saveObject which is a function
// property : function
	return {
		saveObject: saveObject,
		returnObject: returnObject
	}
});
