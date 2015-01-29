var app = angular.module('parseQ');

app.service('parseService', function($http){

	this.postData = function(question) {
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/question',
			data: {text: question}
		})
	}

    this.getData = function($scope) {
    	return $http({
    		method: 'GET',
    		url: 'https://api.parse.com/1/classes/question/',
    	})
    }

});