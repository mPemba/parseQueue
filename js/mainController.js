var app = angular.module('parseQ');

app.controller('mainController', function($scope, parseService) {

    $scope.queue = [];

	// $scope.postData = function() {
	// 	parseService.postData($scope.question).success(function() {
	// 		$scope.question = '';
	// 	})
	// }

    var getParseData = function() {
    	parseService.getQ().then(function(data) {
    		$scope.queue = data;
            console.log(data);
    	})
    }

    getParseData();

    $scope.postQuestion = function() {
        parseService.postQ($scope.question).then(function(){
            getParseData();
            $scope.question = '';
        })
    }

    $scope.escalate = function(questionObj) {
        parseService.escalate(questionObj).then(function(){
            getParseData();
        })
    }
    $scope.delFromQ = function(questionObj) {
        parseService.delFromQ(questionObj).then(function(){
            getParseData();
        })
    }

});