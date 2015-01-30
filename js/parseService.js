var app = angular.module('parseQ');

app.service('parseService', function($http){

	this.postData = function(question) {
		var url = "https://api.parse.com/1/classes/question'"
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
///////////////////////////////////////notes or other ways


// this.postQ = function(question) {
//   var data = {};
//   data.question = question;
//   data.status = 'red';
//   return$http.post(url, data);
// }

// this.getQ = function() {
// 	var dfd = $q.defer();
// 	$http.get(url + "?order=createdAt").then(function(data) {
// 		dfd.resolve(data.data.results);
// 	})
// 	return dfd.promise;
// }
// this.escalate = function(questionObj) {
// 	questionObj.status = "yellow";
// 	return $http.put(url + '/' + questionObj.objectId, {status: questionObj.status});
// }
// this.del = function(questionObj) {
//     return $http.delete(url + '/' + questionObj.objectId)
// }

});